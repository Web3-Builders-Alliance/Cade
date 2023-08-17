use anchor_lang::prelude::*;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("HdRPNnu76KmU4NzY1XvHrhvyGyasPCvsaZ2ogzhWxwGL");

#[program]
mod dice {
    use super::*;
    pub fn make_game(ctx: Context<CreateGame>, bet: u64, guess: u8, hand: u8) -> Result<()> {
        require!(guess < 11 && hand < 6 && bet > 100_000, ErrorCode::IncorrectUser);
        ctx.accounts.game.player = *ctx.accounts.player.key;
        ctx.accounts.game.hash = ctx.accounts.hash.key();
        ctx.accounts.game.bet = bet;
        ctx.accounts.game.guess = guess;
        ctx.accounts.game.hand = hand;

        let accounts: anchor_lang::system_program::Transfer<'_> = anchor_lang::system_program::Transfer {
            from: ctx.accounts.player.to_account_info(),
            to: ctx.accounts.vault.to_account_info()
        };

        let ctx = CpiContext::new(
            ctx.accounts.system_program.to_account_info(),
            accounts
        );

        anchor_lang::system_program::transfer(ctx, bet);
        
        Ok(())
    }

    pub fn resolve_game(ctx: Context<ResolveGame>) -> Result<()> {
        // Prove the house didn't cheat
        require!(ctx.accounts.game.hand < 6, ErrorCode::IncorrectUser);
        let mut game_seed = ctx.accounts.hash.key().to_bytes();

        require!(game_seed.len() == 32, ErrorCode::IncorrectUser);
        let hand = game_seed[31] % 6;

        let hash = anchor_lang::solana_program::blake3::hash(&game_seed);
        let game = &ctx.accounts.game;
     //   require_eq!(hash, game.hash);

        // Did the user win?
        let win = (game.hand + hand) == game.guess;

        // Pay them if they won
        if win {
            let payout = ctx.accounts.game.bet * 2;

            let accounts = anchor_lang::system_program::Transfer {
                from: ctx.accounts.vault.to_account_info(),
                to: ctx.accounts.player.to_account_info()
            };
    
            let seeds = &[
                &b"vault"[..],
                &[*ctx.bumps.get("treasury").unwrap()],
            ];
    
            let signer_seeds = &[&seeds[..]];
    
            let ctx = CpiContext::new_with_signer(
                ctx.accounts.system_program.to_account_info(),
                accounts,
                signer_seeds
            );
    
            anchor_lang::system_program::transfer(ctx, payout);
        }
        // Do some SPL minting for $CADE
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateGame<'info> {
    #[account(mut)]
    pub player: Signer<'info>,
    #[account(
        seeds = [b"vault"],
        bump
    )]
    pub vault: SystemAccount<'info>,
    #[account(init, payer = player, space = Game::LEN)]
    pub game: Account<'info, Game>,
    ///CHECK: 
    pub hash: Account<'info, Hash>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ResolveGame<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
    #[account(mut)]
    ///CHECK: This is safe
    pub player: UncheckedAccount<'info>,
    #[account(
        seeds = [b"vault"],
        bump
    )]
    pub vault: SystemAccount<'info>,
    pub hash: Account<'info, Hash>,
    #[account(
        has_one = player
    )]
    pub game: Account<'info, Game>,    
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Game {
    player: Pubkey,
    hash: Pubkey,
    bet: u64,
    hand: u8,
    guess: u8
}

#[account]
pub struct Hash {
}

impl Game {
    pub const LEN: usize = 8 + 32 + 32 + 8 + 1 + 1;
}

#[error_code]
pub enum ErrorCode {
    #[msg("Isn't your turn to play")]
    IncorrectUser,
    #[msg("You can't use this cell now")]
    InvalidCell,
    #[msg("You can't play, this game status is ended")]
    FinishedGame,
}