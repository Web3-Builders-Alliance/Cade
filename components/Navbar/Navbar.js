import dynamic from "next/dynamic";
import React from 'react'
import { FaTrophy } from "react-icons/fa6";
import { NavbarIcons } from "./NavbarIcons";

const Navbarm = () => {
  const { LeaderIcon, GameIcon, PrizesIcon, DiscordIcon, P2P , Notifications , UserProfile , Telegram } = NavbarIcons()
  const WalletMultiButton = dynamic(
    async () =>
      (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
  );
  return (
    <>

      <nav class="bg-white border-gray-200 dark:bg-black">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">

            {/* <img  src="/cadep.jpg" alt="cadeImage" /> */}

            <span className="self-center text-5xl font-abc font-semibold whitespace-nowrap dark:text-white text-white">
              `Cade
            </span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            <WalletMultiButton
              style={{
                background: "black",
                borderStyle: "solid",
                borderBlockColor: "white",
              }}
            />
            <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700">
              <LeaderIcon />
              <GameIcon />
              <PrizesIcon />
              <P2P />
              <UserProfile/>
              <Notifications className="ml-20"/>
              <Telegram className = "ml-2" />
              <DiscordIcon className = "ml-2" />
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbarm