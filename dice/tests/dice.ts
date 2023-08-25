import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Dice } from "../target/types/dice";
import * as web3 from "@solana/web3.js"

describe("dice", () => {
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Dice as Program<Dice>;
  const playerAccount =  (program.provider as anchor.AnchorProvider).wallet;
  const [vaultAccount] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from("vault")],
    program.programId,
  )
  const gameAccount = anchor.web3.Keypair.generate();
  const hashAccount = anchor.web3.Keypair.generate();

    it('makeGame', async () => {
  
      const bet = new anchor.BN(2);
      const guess = 0; //u8
      const hand = 0; //u8
      
      const tx = await program.methods
        .makeGame(bet,guess,hand,)
        .accounts({
            player: playerAccount.publicKey,
            vault: vaultAccount,
            game: gameAccount.publicKey,
            hash: hashAccount.publicKey,
            systemProgram: anchor.web3.SystemProgram.programId,
        })
        .rpc();
  
      expect(tx).to.have.lengthOf.greaterThan(0);
    });
  
    it('resolveGame', async () => {
  
      const signerAccount = playerAccount;
      
      const tx = await program.methods
        .resolveGame()
        .accounts({
            signer: signerAccount.publicKey,
            player: playerAccount.publicKey,
            vault: vaultAccount,
            hash: hashAccount.publicKey,
            game: gameAccount.publicKey,
            systemProgram: anchor.web3.SystemProgram.programId,
        })
        .rpc();
  
      expect(tx).to.have.lengthOf.greaterThan(0);
    });
  

});

