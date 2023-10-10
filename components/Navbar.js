import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import NavbarIcons from "./micro/NavbarIcons";
import styles from "../styles/Wallet.module.css";
const Navbar = () => {
  const router = useRouter();

  const WalletMultiButton = dynamic(
    async () =>
      (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
  );

  return (
    <>
      <nav className="bg-black border-gray-200 dark:bg-gray-950 dark:border-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <span className="self-center text-5xl font-abc font-semibold whitespace-nowrap dark:text-white text-white">
              Cade
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <NavbarIcons />
              <WalletMultiButton
                style={{
                  background: "black",
                  borderStyle: "solid",
                  borderBlockColor: "white",
                }}
              />
              {/* <li>
          <a href="#" className="block py-2 pl-3 pr-4 mt-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        </li>
        
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 mt-2 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Games</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 mt-2 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">LeaderBoard</a>
        </li>
         */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
