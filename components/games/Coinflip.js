import React from 'react'

const Coinflip = () => {
  return (
   <>
    <div className="max-w-7xl mx-auto py-4 px-4  sm:px-6 lg:px-8"></div>
      <div className="flex justify-center">
        <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-16 dark:bg-gray-800 dark:border-gray-700 w-1/2">
          <form className="space-y-6 pb-3" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Flip a coin!</h5>
            <div>
              <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Bet amount in SOL
              </label>
              <input
                type="number"
                id="amount"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                placeholder="0.1"
                step="0.1"
                
              />
            </div>

            <div className="flex gap-2">
              <button
                className={`w-full text-white ${
                  betSide === 0 ? "bg-blue-700" : "bg-black-200"
                } hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
               
              >
                Heads
              </button>
              <button
                className={`w-full text-white ${
                  betSide === 1 ? "bg-blue-700" : "bg-black-200"
                } hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                
              >
                Tails
              </button>
            </div>
            <button
              onClick={() => playFlip()}
              className={`w-full text-white  ${
                betAmount !== "" ? "bg-blue-700" : "bg-gray-500"
              } focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
              
            >
              Play
            </button>
          </form>
          <p className="block text-sm font-medium text-gray-900 dark:text-gray-300 mt-3">Status: {statusInfo}</p>
        </div>
      </div>
   </>
  )
}

export default Coinflip