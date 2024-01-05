import React from "react";
import { useEffect, useState } from "react";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import * as web3 from "@solana/web3.js";
import { useRouter } from "next/router";
import { useConnection } from "@solana/wallet-adapter-react";
import { Board, useFourInLine } from "../../connector/useFourInLine";
import { BiSolidUpArrow } from "react-icons/bi";
import Link from "next/link";

const FourInLineGame = () => {
  const router = useRouter();
  const { connection } = useConnection();
  const { program } = useFourInLine();
  const { slug } = router.query;
  const wallet = useAnchorWallet();
  //
  const [gamePublicKey, setGamePublicKey] = useState();
  const [gameAccount, setGameAccount] = useState();
  //

  useEffect(() => {
    setGamePublicKey(slug);
    console.log(slug);
  }, [slug]);

  useEffect(() => {
    if (gamePublicKey && program) {
      (async () => {
        const gameAccount = await program.account.game.fetch(gamePublicKey);
        setGameAccount(gameAccount);
      })();
    }
  }, [gamePublicKey, program]);

  useEffect(() => {
    if (!program) return;
    const listener = program.addEventListener(
      "GameUpdated",
      async (event, _slot, _sig) => {
        setGameAccount(event);
      }
    );

    return () => {
      program.removeEventListener(listener);
    };
  }, [program]);

  const Data = [
    {
      name: "Space Invaders",
      img: "/spacenew.webp",
      link: "/Games/SpaceInvaders"
    },
    {
      name: "Chess",
      img: "/chess.avif",
      link: "/Games/Chess"
    },
    {
      name: "FourInLine Game",
      img: "/fourinline.png",
      link: "/Games/FourInLine"
    },
    {
      name: "Car Race",
      img: "/car.jpg",
      link: "/Games/Carrace",
      desc : "Ready to race against the best in this high-speed car game!"
    },
    {
      name: "Tower Defence",
      img: "/tower.jpg",
      link: "/Games/TowerDefence"
    },
    {
      name: "Coin Flip",
      img: "/coinflip.jpg",
      link: "/Games/CoinFlip"
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font relative bg-[url('/kn.jpg')]">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 ">
            <div className="flex justify-center"></div>

            <>
              <section className="text-gray-400 bg-gray-900 body-font rounded-xl">
                <div className="container px-5 py-10 mx-auto">
                  <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/4 w-1/2">
                      <h2 className="font-abc title-font font-medium sm:text-4xl text-3xl text-white">
                        FourInLine
                      </h2>
                      <p className="text-white font-abc text-3xl">Game</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                      <div className="flex">
                        <a className="inline-flex items-center">
                          <BiSolidUpArrow className="text-green-500 text-3xl" />
                          <span className="flex-grow flex flex-col pl-3">
                            <span className="text-4xl font-abc text-white">
                              +100 XP
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                      <div className="flex">
                        <a className="inline-flex items-center">
                          <img
                            src="/cade.png"
                            height={50}
                            width={50}
                            alt="cade"
                          />
                          <span className="flex-grow flex flex-col pl-3">
                            <span className="text-4xl font-abc text-white">
                              Cade +0.1
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                      <h2 className="font-abc sm:text-4xl text-3xl text-white">
                        400+
                      </h2>
                      <p className="text-white font-abc text-3xl">
                        Times Played
                      </p>
                    </div>
                   
                  </div>
                </div>
              </section>
            </>

            <>
              <div className="flex justify-center p-16 bg-black mt-16">
                {!!gameAccount ? (
                  <>
                    <Board
                      board={gameAccount?.board}
                      program={program}
                      gamePublicKey={gamePublicKey}
                      payer={wallet.publicKey}
                      playable={gameAccount?.status == "PLAYING"}
                    />
                    {gameAccount.status != "PLAYING" && (
                      <div className="p-5 m-5 font-extrabold font-abc text-6xl text-center text-white">
                        {gameAccount.status}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex justify-center p-16 bg-black mt-16">
                    <h1 className="text-white font-abc text-4xl">
                      Looks like your game dont exists or the blockchain is
                      still replicating the tx, please try refreshing the page
                    </h1>
                  </div>
                )}

                {/* <DownwardBar slug={slug} show={show} playerOne={playerOne} secondPlayer={secondPlayer} thirdPlayer={thirdPlayer} /> */}
              </div>
              <div className="ml-5 flex justify-center">
                <button className="py-3 text-black font-abc bg-white border-0  px-6 m-2 focus:outline-none rounded text-2xl">
                  <Link href="http://localhost:3000/Games/FourInLine">
                    Back to home
                  </Link>
                </button>
              </div>
            </>
          </div>

          <div className="p-5 lg:w-1/3 md:w-1/2 bg-black flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h1 className="text-white font-abc text-5xl mt-5 ml-5">
              Play More
            </h1>
            <div className="container px-5 py-5 mx-auto">
              <div className="flex flex-col">
                <div className="p-2">
                  <div className="flex flex-col">
                    {Data.map((item) => {
                      return (
                        <div className="mt-10" key={item.name}>
                          <div
                            href="#"
                            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <img
                              className="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                              src={item.img}
                              alt="d"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                              <h5 className="font-abc mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.name}

                              </h5>
                              <button className="mt-5 px-3 text-4xl font-abc bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
                                <a href={`${item.link}`}>Play Now</a>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FourInLineGame;
