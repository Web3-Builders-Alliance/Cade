import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { useTicket } from "../../connector/ticket";
import { useCoinFlip } from "../../connector/coinflip";
import { useUSDCPay } from "../../hooks/transfer";
import { PublicKey } from "@solana/web3.js";
const Rank = () => {
  const { createTransaction } = useUSDCPay();
  const { initCade, mintCade } = useTicket();
  return (
    <>
      <div className="p-12 md:w-1/2 flex flex-col items-start">
        <span className="inline-block py-1 px-2 rounded bg-gray-800 text-yellow-300 text-opacity-75 text-lg font-abc font-medium tracking-widest">
          CADE
        </span>
        <h2 className="text-5xl font-abc title-font text-white mt-4 mb-4">
          Your Rank
        </h2>
        <div className="flex border-2 rounded-lg border-white p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center  text-indigo-400 flex-shrink-0">
            <img
              className="rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/orbit-4ea31.appspot.com/o/hehe.png?alt=media&token=c9b80a22-1a52-4b01-9181-0348f8e84caf"
              alt="/>"
            ></img>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-4xl font-abc title-font font-medium mb-3">
              Rank
            </h2>
            <div className="flex flex-row">
              <h2 className="text-white text-5xl font-abc title-font font-medium mb-3">
                # 94
              </h2>
              <button
                className="text-4xl font-abc bg-transparent ml-5 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
              >
                 <a href={`LeaderBoard`}>LeaderBoard</a>
              </button>
            </div>
            <h2 className="text-white font-abc text-3xl font-medium mb-3 mt-5">
              1,093,531
            </h2>
            <p className="leading-relaxed text-4xl font-abc text-white mt-2">
            Climb the ranks in cade and prove you are the gaming champion. 
            </p>
          </div>
          <div className="flex flex-col">
            <BiSolidUpArrow className="text-green-400 text-2xl" />
            <h3 className="text-2xl text-green-400">54</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rank;
