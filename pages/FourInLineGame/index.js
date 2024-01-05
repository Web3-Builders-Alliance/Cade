import React, { use } from "react";
import { useEffect, useState } from "react";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Keypair } from "@solana/web3.js";
import * as web3 from "@solana/web3.js";
import { useConnection } from "@solana/wallet-adapter-react";
import { Board, useFourInLine } from "../../connector/useFourInLine";
import { useRouter } from "next/router";
import Link from "next/link";
import { set } from "@coral-xyz/anchor/dist/cjs/utils/features";

const FourInLine = () => {
  const wallet = useAnchorWallet();
  const { program } = useFourInLine();
  const [mode, setMode] = useState("SOLO");
  const [player2, setPlayer2] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState();
  const [created, setCreated] = useState(false);
  const router = useRouter();

  const handleClick = async (e) => {
    console.log("click");
    e.preventDefault()
    if (program) {
      console.log(program);
      if ( mode == "PVP" && !player2){
        setError("You need to input your friend's wallet")
      }else{
        console.log(player2);
        const player2Key =
          mode == "PVP" && player2 ? new PublicKey(player2) : player2;
          const game = new Keypair()

        const create = async () => {
          await program.methods
            .createGame(
              mode == "PVP"
                ? [wallet.publicKey, player2Key]
                : [wallet.publicKey],
              mode
            )
            .accounts({
              payer: wallet.publicKey,
              game: game.publicKey,
            })
            .signers([game])
            .rpc({
              skipPreflight: true,
            }).then((res) => {
              console.log(res);
            }).catch((err) => {
              console.log(err);
            });
            
          setCreated(true);
          setName(game.publicKey.toBase58());
        };
        create();
      }

      }
  };
  useEffect(() => {
    if (!program) return;
    const listener = program.addEventListener(
      "GameCreated",
      async (event, _slot, _sig) => {
        router.push(`/FourInLineGame/${name}`);
      }
    );

    return () => {
      program.removeEventListener(listener);
    };
  }, [program, router]);
  return (
    <>
      <>
        <div className=" p-16 bg-black">
          <div className="flex justify-center">
            <h1 className="text-white font-abc text-5xl mt-5">
              Four In Line Game
            </h1>
          </div>
          <>
          <select
            className="p-5 mb-5 bg-blue-600"
            value={mode}
            onChange={(e) => {
              setMode(e.target.value);
            }}
          >
            <option key={"PVP"} value={"PVP"}>
              {"Play agaist a friend"}
            </option>
            <option key={"PC"} value={"PC"}>
              {"Play agaist the PC"}
            </option>
            <option key={"SOLO"} value={"SOLO"}>
              {"Play Solo"}
            </option>
          </select>
          {mode == "PVP" && (
            <input
              placeholder="Copy your friends wallet here"
              value={player2}
              onChange={(e) => setPlayer2(e.target.value)}
              className="p-5 mb-5"
            />
          )}
          <button
            type="button"
            onClick={handleClick}
            className="bg-purple-700 text-white font-extrabold p-2 px-4 rounded-lg"
          >
            Create Game!
          </button>
          {created && (
            <div className="text-white text-center mt-5">
              <strong>
                If this don't redirect you automatically{" "}
                <Link href={`/${name}`}>Click here</Link>
              </strong>
            </div>
          )}
        </>
        </div>
      </>
    </>
  );
};

export default FourInLine;
