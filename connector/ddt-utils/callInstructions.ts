import { web3 } from "@project-serum/anchor";
import * as anchor from "@coral-xyz/anchor";

export const createMap = (program, name, board, budget, user,) => {
  const [mapPDA] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from(name)],
    program.programId,
  )
  if (program) {
    (async () => {
      try {
        const tx = await program.methods
          .createMap( name, board, new anchor.BN(budget),)
          .accounts({
            user,
            map: mapPDA,
            systemProgram: web3.SystemProgram.programId,
          })
          .rpc();
          
      } catch (error) { console.log(error) }
    })();
  }
};

export const createGame = (program, map , user,) => {
  console.log({ map, user })
  const game =  anchor.web3.Keypair.generate();
  const [mapPDA] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from(map)],
    program.programId,
  )
  if (program) {
    (async () => {
      try {
        const tx = await program.methods
          .createGame()
          .accounts({
            map:mapPDA,
            game:game.publicKey,
            user,
            systemProgram: web3.SystemProgram.programId,
          })
          .signers([game])
          .rpc();
      } catch (error) { console.log(error) }
    })();
  }
};

export const deployUnits = (program, deploys, game, user, map,) => {
  console.log({ deploys, game, user, map })
  const [mapPDA] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from(map)],
    program.programId,
  )
  if (program) {
    (async () => {
      try {
        const tx = await program.methods
          .deployUnits( deploys,)
          .accounts({
            game,
            user,
            map:mapPDA,
            systemProgram: web3.SystemProgram.programId,
          })
          .rpc();
      } catch (error) { console.log(error) }
    })();
  }
};

