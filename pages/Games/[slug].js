import React, { useState } from "react";
import Coinflip from "../../components/games/Coinflip";
import { BiSolidUpArrow } from "react-icons/bi";
import { useTicket } from "../../connector/ticket";
import { DownwardBar } from "../../components/GamePageComponents/DownwardBar";
import { useUSDCPay } from "../../hooks/transfer";
import { useRouter } from "next/router";
import TowerDefence from "../../components/games/TowerDefence";
import FourInLine from "../../components/games/FourInLine";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import Link from "next/link";
import TopPlayers from "../../components/GamePageComponents/GameDetails";
import GameDetails from "../../components/GamePageComponents/GameDetails";
import PlayMore from "../../components/GamePageComponents/PlayMore";
const Games = ({
  slug,
  description,
  img,
  isGameExist,
  playerOne,
  secondPlayer,
  thirdPlayer,
  timePlayed,
}) => {
  const { createTransaction } = useUSDCPay();
  const { publicKey } = useWallet();
  const { mintCade } = useTicket();
  const [show, setshow] = useState(true);

  const renderGame = () => {
    if (slug == "CoinFlip") {
      return (
        <div className="mt-10">
          <Coinflip />
        </div>
      );
    }
    if (slug == "TowerDefence") {
      return (
        <div className="mt-10">
          <TowerDefence />
        </div>
      );
    }

    if (slug == "FourInLine") {
      return (
        <div className="mt-10">
          <FourInLine />
        </div>
      );
    }
  };

  const initgame = () => {
    createTransaction(
      publicKey,
      new PublicKey("2JSg1MdNqRg9z4RP7yiE2NV86fux2BNtF3pSDjhoi767"),
      5
    );
    setTimeout(() => {
      setshow(!show);
    }, 7000);
  };

  return (
    <>
      <section className="text-gray-600 body-font relative bg-[url('/kn.jpg')]">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 ">


            {isGameExist ? (
              <>
                <div className="">
                  {show ? (
                    <>
                      <GameDetails />
                      <div className="bg-black p-6 flex flex-row rounded-xl mt-5 h-max">
                        <div className="w-2/5">
                          <div className="flex justify-center m-4">
                            <img
                              className="w-64  rounded-xl"
                              src={img}
                              alt="gggg"
                            />
                          </div>
                        </div>
                        <div className="ml-3 w-3/5">
                          <div className="h-3/4">
                            <h1 className="mt-5 flex justify-start text-5xl font-abc text-white">
                              Game Name
                            </h1>
                            <h6 className="mt-5 flex justify-start text-3xl font-abc text-white">
                              Lorem Ipsum is simply dummy text.
                            </h6>
                          </div>

                          <div className="mb-5 h-1/4">
                            <div className="flex flex-row">
                              <button
                                className="py-2 text-black font-abc bg-white border-0  px-6 focus:outline-none rounded text-4xl"
                                onClick={() => initgame()}
                              >
                                Play Now
                              </button>

                            </div>
                          </div>
                        </div>
                      </div>

                      {/* //ss */}
                      <div className="bg-black p-6 flex flex-col rounded-xl mt-5 h-max">
                      
                       <div className="flex flex-row">
                       <div className="w-3/4">
                       <h1 className="text-2xl font-abc text-white">Game ScreenShots</h1>
                       </div>
                       <div className="w-1/4">
                       <h1 className="text-2xl font-abc text-white">Played By - 2+</h1>
                       </div>
                       </div>
                       
                       <div className="flex flex-row">
                        <div className="w-3/4 overflow-x-auto overflow-y-hidden">
                          <div className="flex flex-row">
                            <img className="w-32 h-16 m-4" src="https://picsum.photos/200" alt="" />
                            <img className="w-32 h-16 m-4" src="https://picsum.photos/201" alt="" />
                            <img className="w-32 h-16 m-4" src="https://picsum.photos/202" alt="" />
                            <img className="w-32 h-16 m-4" src="https://picsum.photos/203" alt="" />
                            <img className="w-32 h-16 m-4" src="https://picsum.photos/208" alt="" />
                          </div>
                        </div>
                        <div className="ml-5 flex flex-row items-center w-1/4 overflow-x-auto overflow-y-hidden">
                          <img class="flex ml-2 justify-center w-12 h-12 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src="https://picsum.photos/200" alt="Bordered avatar" />
                          <img class="flex ml-2 justify-center w-12 h-12 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src="https://picsum.photos/200" alt="Bordered avatar" />
                          <img class="flex ml-2 justify-center w-12 h-12 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src="https://picsum.photos/200" alt="Bordered avatar" />
                        </div>
                        </div>
                      </div>

                    </>
                  ) : (
                    renderGame()
                  )}
                  {/* <DownwardBar
                    slug={slug}
                    show={show}
                    playerOne={playerOne}
                    secondPlayer={secondPlayer}
                    thirdPlayer={thirdPlayer}
                  /> */}
                </div>
              </>
            ) : (
              <></>
            )}

            {isGameExist ? (
              <>
                <div className="flex justify-center flex-row mt-5">
                </div>
              </>
            ) : (
              <div className="flex justify-center mt-16">
                <h1 className="font-abc text-5xl text-white">
                  {slug} Game Coming Soon
                </h1>
              </div>
            )}

          </div>

          {/* //SideBar */}
          <PlayMore />
        </div>
      </section>
    </>
  );
};
export async function getServerSideProps(context) {
  const { slug } = context.query;
  let description = "";
  let img = "";
  let isGameExist = false;
  let playerOne = "";
  let secondPlayer = "";
  let thirdPlayer = "";
  let timePlayed = "";
  console.log(`slug is my ${slug}`);
  if (slug == "CoinFlip") {
    (description = "A coinflipgame"), (img = "/gamethu1.jpg");
    (isGameExist = true),
      (playerOne = "John"),
      (secondPlayer = "Ben"),
      (thirdPlayer = "Josh");
    timePlayed = "200+";
  }
  if (slug == "TowerDefence") {
    (description = "A TowerDefence Game"),
      (img = "/tower.jpg"),
      (isGameExist = true),
      (playerOne = "TolyMan"),
      (secondPlayer = "OnlySolana"),
      (thirdPlayer = "Elliot");
    timePlayed = "100+";
  }
  if (slug == "FourInLine") {
    description = "A Four In Line Game";
    img = "/sf.png";
    isGameExist = true;
    playerOne = "Niunjap#22";
    secondPlayer = "Bhindi";
    thirdPlayer = "Akkobaiii";
    timePlayed = "500+";
  } else {
    description = "No Such Game Found";
  }
  return {
    props: {
      slug,
      description,
      img,
      isGameExist,
      playerOne,
      secondPlayer,
      thirdPlayer,
      timePlayed,
    },
  };
}

export default Games;
