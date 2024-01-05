import React, { useState, useEffect } from "react";
import Coinflip from "../../components/games/Coinflip";
import { BiSolidUpArrow } from "react-icons/bi";
import { useTicket } from "../../connector/ticket";
import { DownwardBar } from "../../components/GamePageComponents/DownwardBar";
import { useUSDCPay } from "../../hooks/transfer";
import { useRouter } from "next/router";
import TowerDefence from "../../components/games/TowerDefence";
import FourInLine from "../FourInLineGame";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import Link from "next/link";
import TopPlayers from "../../components/GamePageComponents/GameDetails";
import GameDetails from "../../components/GamePageComponents/GameDetails";
import PlayMore from "../../components/GamePageComponents/PlayMore";
import MiniLeaderBoard from "../../components/Herop/MiniLeaderBoard";
import CadeSocial from "../../components/Herop/CadeSocial";
import GameLeaderBoard from "../../components/GamePageComponents/GameLeaderBoard";
import GameForum from "../../components/GamePageComponents/GameForum";
import UpcomingGames from "../../components/Herop/UpcomingGames";
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
  const [isMobile, setIsMobile] = useState(false)
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

  const handleFullScreenClick = () => {
    const iframe = document.getElementById('myIframe');
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  };

  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 835) {
      setIsMobile(true)
      console.log("Mobile")
      console.log(window.innerWidth)
    } else {
      setIsMobile(false)
      console.log("Not Mobile")
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  },[])

  const playGameForMobile = () => {
    setshow(!show)
    setTimeout(()=>{
      handleFullScreenClick()
    },100)
  }

  const playGameForLargeScreen=() => {
    setshow(!show)
  }

  const initgame = () => {
    // createTransaction(
    //   publicKey,
    //   new PublicKey("2JSg1MdNqRg9z4RP7yiE2NV86fux2BNtF3pSDjhoi767"),
    //   5
    // );
    setTimeout(() => {
      if (isMobile == false) {
        setshow(!show);
      } if (isMobile == true) {
        setshow(!show);
        setTimeout(() => {
          handleFullScreenClick()
        }, 200)
      }
    });
  };

  return (
    <>
      <section className="text-gray-600 body-font relative lg:px-32 px-5 py-10 mx-auto bg-gray-950">

        {isGameExist ? (
          <>
            <div className="">

              <>
                <div className="flex flex-col border rounded-xl border-gray-700">
                  <GameDetails />
                  {show ? (
                    <>
                      <div className="bg-gray-950 p-6 flex rounded-b-xl  flex-row h-max">
                        <div className="w-2/5">
                          <div className="flex items-center m-4 h-full">
                            <img
                              className="flex justify-center w-64 rounded-xl"
                              src={img}
                              alt="gggg"
                            />
                          </div>
                        </div>
                        <div className="ml-3 w-3/5">

                          <div className="h-1/5">
                            <h1 className="flex justify-start text-4xl font-abc text-white">
                              Lorem Ipsum
                            </h1>
                          </div>

                          <div className="mt-3 h-2/5 overflow-y-auto overflow-x-hidden">
                            <h6 className="flex justify-start text-2xl font-abc text-gray-500">
                              Description : Lorem Ipsum is simply dummy
                            </h6>
                          </div>

                          <div className="mt-5 h-2/5">
                          <div className="hidden lg:block xl:block">
                              <button
                                className="py-2 text-black font-abc bg-white border-0  px-6 focus:outline-none rounded text-4xl"
                                onClick={() => playGameForLargeScreen()}
                              >
                                Play Now
                              </button>

                            </div>
                            <div className="block lg:hidden xl:hidden">
                              <button
                                className="py-2 text-black font-abc bg-white border-0  px-6 focus:outline-none rounded text-4xl"
                                onClick={() => playGameForMobile()}
                              >
                                Play Now
                              </button>

                            </div>
                          </div>
                        </div>
                      </div>

                    </>
                  ) : (
                    <>
                      <div className="flex justify-center bg-gray-950 p-6 rounded-b-xl flex-row h-1/2">
                        <iframe id="myIframe" src="https://659823a39ed589203e611bf2--super-rabanadas-6274f7.netlify.app/" allowFullScreen='true' scrolling="no" style={{ width: '74%', height: '500px', overflow: "hidden", backgroundColor: "black", borderRadius: '10px' }} title="Iframe Example"></iframe>
                      </div>
                      {/* <button
                        className="block lg:hidden xl:hidden py-2 text-black font-abc bg-white border-0  px-6 focus:outline-none rounded text-4xl"
                        onClick={handleFullScreenClick}
                      >
                        Full Screen
                      </button> */}
                    </>
                  )}

                </div>
                {/* //ss */}
                <div className="bg-gray-950 p-6 flex flex-col rounded-xl mt-5 h-max border border-gray-700">

                  <div className="flex flex-row">
                    <div className="flex justify-center w-3/4">
                      <h1 className="text-3xl font-abc text-white">Game ScreenShots</h1>
                    </div>
                    <div className="flex justify-center w-1/4">
                      <h1 className="text-3xl font-abc text-white ml-2">Played By</h1>
                    </div>
                  </div>

                  <div className="flex flex-row">
                    <div className="w-3/4 overflow-x-auto overflow-y-hidden">
                      <div className="flex flex-row">
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/200" alt="" />
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/201" alt="" />
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/202" alt="" />
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/203" alt="" />
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/208" alt="" />
                      </div>
                    </div>
                    <div className="ml-5 flex flex-row items-center w-1/4 overflow-x-auto overflow-y-hidden">
                      <img class="flex ml-2 justify-center w-12 h-12 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src="https://picsum.photos/200" alt="Bordered avatar" />
                      <img class="flex ml-2 justify-center w-12 h-12 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src="https://picsum.photos/201" alt="Bordered avatar" />
                      <img class="flex ml-2 justify-center w-12 h-12 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src="https://picsum.photos/202" alt="Bordered avatar" />
                    </div>
                  </div>
                </div>

                <section className="text-gray-600 body-font relative ">
                  <div className="gap-x-5 container px-2 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="mt-2">
                      <div className="p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                        <div>
                          <GameLeaderBoard />
                        </div>
                        <div className="">
                          <GameForum />
                        </div>
                        <div className="md:mt-5 flex justify-center">
                          <PlayMore />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </>

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
