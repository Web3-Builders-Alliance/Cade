import { FC, useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Head from "next/head";
import { useProgram } from "../../connector/ddt-utils/useProgram";
import { useRouter } from "next/router"

import {
  createGame
} from '../../connector/ddt-utils/callInstructions'
import {
  deployUnits
} from '../../connector/ddt-utils/callInstructions'
import { PublicKey } from "@solana/web3.js";


const ChooseUnits = (props) => {
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const { program } = useProgram({ connection, wallet });

// React UseStates hooks for managing args 
//for createMap
const [deploys_for_deployUnits , setdeploys_for_deployUnits] = useState([["plane"],[],[],[],[],[],])

//handler functions for inputs feilds
const namehandler_for_createMap = (e) => {
  setname_for_createMap(e.target.value)
}
const boardhandler_for_createMap = (e) => {
  setboard_for_createMap(e.target.value)
}
const budgethandler_for_createMap = (e) => {
  setbudget_for_createMap(e.target.value)
}
const deployshandler_for_deployUnits = (e) => {
  setdeploys_for_deployUnits(e.target.value)
}

const map_name = "test"
const map_for_deployUnits = "test"

  return (
    <>
      <Head>
        <title>dtt</title>
        <meta name="description" content="dtt" />
      </Head>
       <div className="flex justify-center py-10">
        <h1 className="sm:text-3xl text-2xl font-extrabold mb-4 text-white">
          Call Instructions of Your IDL By a Clicking a Button
        </h1>
      </div>
      <div className="flex justify-center">
        <h1 className="sm:text-3xl text-2xl font-extrabold mb-4 text-white">
          Powered By SODA
        </h1>
      </div>
 
    <div className="text-white flex flex-col text-2xl m-5 p-2 ">
        <div className="min-h-screen bg-inherit py-1 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className=" mx-auto">
                <div className="flex items-center space-x-5">
                  <div className="h-16 w-16 p-2 bg-black rounded-full flex flex-shrink-0 justify-center items-center text-3xl font-mono">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/shrine-76128.appspot.com/o/soda.png?alt=media&token=32de0266-c1ee-4a31-a2e1-2df6d35086f8"
                      alt="ff"
                    />
                  </div>
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 className="leading-relaxed mt-8">For createGame instructions</h2>
                    <p className="text-sm text-gray-500 font-normal leading-relaxed invisible">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  </div>
                  <div className="pt-4 flex items-center space-x-4">
                    
                    <button 
                    className="bg-blue-500 flex justify-center items-center w-full text-white px-3 text-xl py-1 rounded-md focus:outline-none"
                    onClick={
                      ()=>createGame(program ,  map_name, wallet.publicKey,)
                    }
                    >
                       Call_createGame_instruction
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="text-white flex flex-col text-2xl m-5 p-2 ">
        <div className="min-h-screen bg-inherit py-1 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className=" mx-auto">
                <div className="flex items-center space-x-5">
                  <div className="h-16 w-16 p-2 bg-black rounded-full flex flex-shrink-0 justify-center items-center text-3xl font-mono">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/shrine-76128.appspot.com/o/soda.png?alt=media&token=32de0266-c1ee-4a31-a2e1-2df6d35086f8"
                      alt="ff"
                    />
                  </div>
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 className="leading-relaxed mt-8">For deployUnits instructions</h2>
                    <p className="text-sm text-gray-500 font-normal leading-relaxed invisible">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <p className="">deploys</p>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder={`Enter deploys`}
                        value={
                          deploys_for_deployUnits
                        }
                        onChange={
                          deployshandler_for_deployUnits
                        }
                      />
                    </div>
                  </div>
                  <div className="pt-4 flex items-center space-x-4">
                    
                    <button 
                    className="bg-blue-500 flex justify-center items-center w-full text-white px-3 text-xl py-1 rounded-md focus:outline-none"
                    onClick={
                      ()=>deployUnits(program , deploys_for_deployUnits ,  new PublicKey("BeTLVuVggw6J2E6192gRscNULXqoeiSr9nUvP9aXEa7a")   , wallet.publicKey   , map_for_deployUnits ,)
                    }
                    >
                       Call_deployUnits_instruction
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default ChooseUnits;
