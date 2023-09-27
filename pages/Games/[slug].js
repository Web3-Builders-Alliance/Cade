import React, { useState } from 'react'
import Coinflip from '../../components/games/Coinflip';
import { BiSolidUpArrow } from "react-icons/bi"
const Games = ({ slug }) => {
    const [show, setshow] = useState(true)

    const Data = [
        {
            name: "Space Invaders",
            img: "/spacenew.webp"
        },
        {
            name: "Coin Flip",
            img: "/coinflip.jpg"
        },
        {
            name: "Dice Game",
            img: "/dice.jpg"
        },
        {
            name: "Car Race",
            img: "/car.jpg"
        }
    ]
    return (
        <>

            <section class="text-gray-600 body-font relative bg-[url('/kn.jpg')]">
                <div class="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div class="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 ">
                        <div className='flex justify-center'>

                        </div>
                        <section class="text-gray-400 bg-gray-900 body-font rounded-xl">
                            <div class="container px-5 py-10 mx-auto">
                                <div class="flex flex-wrap -m-4 text-center">
                                    <div class="p-4 sm:w-1/4 w-1/2">
                                        <h2 class="font-abc title-font font-medium sm:text-4xl text-3xl text-white">CoinFlip</h2>
                                        <p class="text-white font-abc text-3xl">Game</p>
                                    </div>
                                    <div class="p-4 sm:w-1/4 w-1/2">

                                        <div className='flex'>
                                            <a class="inline-flex items-center">
                                                <BiSolidUpArrow className='text-green-500 text-3xl' />
                                                <span class="flex-grow flex flex-col pl-3">
                                                    <span class="text-4xl font-abc text-white">100+ XP</span>
                                                </span>
                                            </a>


                                        </div>
                                    </div>
                                    <div class="p-4 sm:w-1/4 w-1/2">

                                        <div className='flex'>
                                            <a class="inline-flex items-center">
                                                <img src='/cade.png' height={50} width={50} alt='cade' />
                                                <span class="flex-grow flex flex-col pl-3">
                                                    <span class="text-4xl font-abc text-white">100+ XP</span>
                                                </span>
                                            </a>


                                        </div>

                                    </div>
                                    <div class="p-4 sm:w-1/4 w-1/2">
                                        <h2 class="font-abc sm:text-4xl text-3xl text-white">400+</h2>
                                        <p class="text-white font-abc text-3xl">Times Played</p>
                                    </div>
                                    <div className='ml-16 '>
                                    <button class="py-3 text-black font-abc bg-white border-0  px-6 m-2 focus:outline-none rounded text-2xl"
                                        onClick={() => setshow(!show)}
                                    >Play Now</button>
                                    </div>
                                    <div className='ml-16 '>
                                    <button class="py-3 text-black font-abc bg-white border-0  px-6 m-2 focus:outline-none rounded text-2xl"
                                        onClick={() => setshow(!show)}
                                    >Claim XP and Cade</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <div className='flex justify-center p-2'>
                            <button class="py-3 text-black font-abc bg-white border-0  px-6 m-2 focus:outline-none rounded text-2xl"
                                onClick={() => setshow(!show)}
                            >Play</button>
                        </div> */}
                        <div className=''>
                            {show ? (
                                <div className='p-10'>
                                    <img width={800} src='/gamethu1.jpg' alt='gggg' />
                                </div>

                            ) : (
                                <Coinflip />
                            )}

                        </div>
                    </div>


                    <div class="p-5 lg:w-1/3 md:w-1/2 bg-black flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h1 className='text-white font-abc text-5xl mt-5 ml-5'>Play More</h1>
                        <div class="container px-5 py-5 mx-auto">
                            <div class="flex flex-col">
                                <div class="p-2">
                                    <div className='flex flex-col'>
                                        {Data.map((item) => {
                                            return (
                                                <>
                                                    <div className='mt-10'>
                                                        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                            <img class="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.img} alt="d" />
                                                            <div class="flex flex-col justify-between p-4 leading-normal">
                                                                <h5 class="font-abc mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>

                                                            </div>
                                                        </a>
                                                    </div>
                                                </>
                                            )

                                        })}


                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export async function getServerSideProps(context) {
    const { slug } = context.query;
    console.log(`slug is my ${slug}`);
    return {
        props: { slug },
    };
}

export default Games