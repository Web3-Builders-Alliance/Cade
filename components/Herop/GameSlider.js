import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { truncateHeadline, truncateSublie } from "../../hooks/Truncate";
import AfterHero from "./AfterHero";
import CadeSocial from "./CadeSocial";

export default function GameSlider({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    const handlePrevSlide = () => {
        let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    return (
        <>
            <div className="mt-2">
                {/* <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      /> */}
                <div className="border-2 border-gray-700 rounded-xl w-full flex overflow-hidden">
                    <Swipe
                        onSwipeLeft={handleNextSlide}
                        onSwipeRight={handlePrevSlide}
                        className=" z-10 w-full "
                    >
                        {images.map((indexx, index) => {
                            if (index === currentSlide) {
                                return (
                                    <>
                                        <img
                                            key={indexx.id}
                                            src="/carnew.jpg"
                                            alt="ff"
                                            layout="fill"
                                            objectFit="contain"
                                            className="animate-fadeIn rounded-3xl p-3 w-100 h-100"
                                        />
                                        <div className="border-white mr-4 ml-4 p-2 rounded-2xl bg-gray-950">
                                            <div className="flex">
                                                <h1 className="font-abc font-bold text-5xl text-white">{indexx.name}</h1>
                                            </div>
                                            <span className="font-abc text-2xl text-gray-400">{truncateSublie(indexx.desc)}</span>
                                        </div>
                                        <button type="button" class="mt-5 font-abc text-2xl ml-5  bg-gray-950 text-white border-2 border-yellow-400 focus:outline-none rounded-lg px-5 py-3 me-2 mb-2 ">Play Now</button>
                                    </>
                                );

                            }
                        })}
                    </Swipe>
                </div>
                {/* <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      /> */}

                <div className=" flex justify-center p-4 mt-5">
                    {images.map((_, index) => {
                        return (
                            <div
                                className={
                                    index === currentSlide
                                        ? "h-2 w-2 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                                        : "h-2 w-2 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                                }
                                key={index}
                                onClick={() => {
                                    setCurrentSlide(index);
                                }}
                            />
                        );
                    })}
                </div>
               

            </div>



        </>
    );
}