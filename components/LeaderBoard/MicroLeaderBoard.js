import React from 'react'

const MicroLeaderBoard = () => {
    return (
        <>

            <div className='font-abc text-6xl ml-16 text-white'>
                <h1>Players</h1>
            </div>
            <section class="text-gray-40 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="-my-8 divide-y-2 divide-gray-800">
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <div className='flex justify-center'>
                                    <img height={100} width={100} src='/ffn.png' alt='gggg' />
                                </div>
                            </div>
                            <div class="md:flex-grow">
                                <h2 class="font-abc text-5xl font-medium text-white title-font mb-2">User3</h2>
                                <h2 class="font-abc text-3xl text-white">Matched Played : 80</h2>
                                <h2 class="font-abc text-3xl text-white">Win Ratio : 78%</h2>
                            </div>
                        </div>
                        <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <div className='flex justify-center'>
                                    <img height={100} width={100} src='/ffn.png' alt='gggg' />
                                </div>
                            </div>
                            <div class="md:flex-grow">
                                <h2 class="font-abc text-5xl font-medium text-white title-font mb-2">User4</h2>
                                <h2 class="font-abc text-3xl text-white">Matched Played : 70</h2>
                                <h2 class="font-abc text-3xl text-white">Win Ratio : 58%</h2>
                            </div>
                        </div>
                        <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <div className='flex justify-center'>
                                    <img height={100} width={100} src='/ffn.png' alt='gggg' />
                                </div>
                            </div>
                            <div class="md:flex-grow">
                                <h2 class="font-abc text-5xl font-medium text-white title-font mb-2">User5</h2>
                                <h2 class="font-abc text-3xl text-white">Matched Played : 30</h2>
                                <h2 class="font-abc text-3xl text-white">Win Ratio : 42%</h2>
                            </div>
                        </div>
                        <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <div className='flex justify-center'>
                                    <img height={100} width={100} src='/ffn.png' alt='gggg' />
                                </div>
                            </div>
                            <div class="md:flex-grow">
                                <h2 class="font-abc text-5xl font-medium text-white title-font mb-2">User6</h2>
                                <h2 class="font-abc text-3xl text-white">Matched Played : 60</h2>
                                <h2 class="font-abc text-3xl text-white">Win Ratio : 22%</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default MicroLeaderBoard