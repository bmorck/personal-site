import React from 'react';
import rlenv from "../files/RLEnv.png"
import tigertravel from "../files/tigertravel.png"
import rlreport from "../files/RLreport.pdf"

const Portfolio = () => {
    return (
        <div className="grow justify-center flex fade-in2 pb-10 pt-10 font-regular-font">
            <div className="md:basis-1/3"></div>
            <div className="md:basis-1/2 pl-5 pr-5 drop-shadow-md w-11/12">
                {/* Card for RL Project */}
                <div className="flex flex-col  border-0 drop-shadow-sm rounded-lg bg-custom-bg-color2 p-5 mb-5 border-1">
                    <div className="flex flex-col md:flex-row items-center">
                        {/*<div className="mr-5 ml-5 w-36 border-1 drop-shadow-lg hover:opacity-75 transition ease-in-out delay-50 duration-500 relative hover:scale-110">
                        <div class=" inset-0 bg-cover z-0 "> <img src={rlenv} alt="RL Env" /></div>
                        <div className="opacity-0 hover:opacity-100 duration-500 absolute inset-0 z-10 flex justify-center items-center text-sm text-white font-display-font font-semibold underline">&lt; View Code &gt;</div>
                     </div>*/}

                        <div
                            class="overflow-hidden mr-5 ml-5 mb-5 md:mb-0 w-36 shrink-0 rop-shadow-md rounded-md relative group hover:opacity-75 transition duration-500 ease-in-out"
                        >
                            <div
                                class="z-50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out absolute from-black/80 to-transparent bg-gradient-to-t inset-0 flex justify-center items-center"
                            >
                                <div
                                    class="transform-gpu text-sm group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transform transition duration-500 ease-in-out"
                                >
                                    <div className=""><a href="https://github.com/bmorck/MultiCar-RL" class="font-bold text-stone-300 font-display-font border-1 border-stone-300 rounded-xl p-1 bg-slate-200 bg-opacity-20">&lt; View Source &gt;</a> </div>
                                </div>

                            </div>
                            <img
                                alt=""
                                class="inset-0 group-hover:scale-125 transition duration-500 ease-in-out"
                                src={rlenv}
                            />
                        </div>

                        <div className="text-lg">
                            <div className="font-bold text-center md:text-left pb-2">Multi-Agent Reinforcement Learning</div>
                            <div className="text-xs">
                                This project was created as a part of my Independent Research in school. The project involves using Reinforcement
                                Learning to train multiple agents in various traffic environments to eliminate traffic and increase
                                the velocity of all vehicles. Two traffic environments were explored, a circle and figure eight track, and two
                                Reinforcement Learning policies were used: Proximal policy optimization (PPO) and Deep Q-Learning (DQN).
                            <br />
                                <a href={rlreport} className="underline text-stone-600"> Download Research Report </a>
                            </div>

                        </div>
                    </div>
                    <div className="flex pt-2 flex-wrap justify-center">
                        <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                            Python
                            </div>
                        <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                            PyGame
                            </div>
                        <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                            RLlib
                            </div>
                    </div>
                </div>

                {/* Card for TigerTravel Project */}
                <div className="flex flex-col  border-0 drop-shadow-sm rounded-lg bg-custom-bg-color2 p-5 mb-5 border-1">
                    <div className="flex flex-col md:flex-row items-center">
                        {/*<div className="mr-5 ml-5 w-36 border-1 drop-shadow-lg hover:opacity-75 transition ease-in-out delay-50 duration-500 relative hover:scale-110">
                        <div class=" inset-0 bg-cover z-0 "> <img src={rlenv} alt="RL Env" /></div>
                        <div className="opacity-0 hover:opacity-100 duration-500 absolute inset-0 z-10 flex justify-center items-center text-sm text-white font-display-font font-semibold underline">&lt; View Code &gt;</div>
                     </div>*/}

                        <div
                            class="overflow-hidden mr-5 ml-5 mb-5 md:mb-0 w-36 shrink-0 rop-shadow-md rounded-md relative group hover:opacity-75 transition duration-500 ease-in-out"
                        >
                            <div
                                class="z-50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out absolute from-black/80 to-transparent bg-gradient-to-t inset-0 flex justify-center items-center"
                            >
                                <div
                                    class="transform-gpu text-sm group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transform transition duration-500 ease-in-out"
                                >
                                    <div className=""><a href="https://github.com/bmorck/TigerTravel" class="font-bold text-stone-300 font-display-font border-1 border-stone-300 rounded-xl p-1 bg-slate-200 bg-opacity-20">&lt; View Source &gt;</a> </div>
                                </div>

                            </div>
                            <img
                                alt=""
                                class="inset-0 group-hover:scale-125 transition duration-500 ease-in-out"
                                src={tigertravel}
                            />
                        </div>

                        <div className="text-lg">
                            <div className="font-bold text-center md:text-left pb-2">Tiger Travel</div>
                            <div className="text-xs">
                                Tiger Travel is a webapp that helped Princeton students connect and form groups
                                for ride-sharing applications based on overlapping time intervals and destinations.
                                Users communicated using in-app messaging to coordinate with group members.
                            <br />
                                <div className="text-stone-600 text-xxs">
                                    * While originally hosted on heroku, the site is no longer hosted as it has been deprecated
                                    and legacy dependencies no longer build.
                            </div>

                                <a href="http://web.archive.org/web/20220521111124/https://tiger-travel.herokuapp.com/" className="underline text-stone-600"> View Archived Site Snapshot</a>
                            </div>

                        </div>
                    </div>
                    <div className="flex pt-2 flex-wrap justify-center">
                        <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                            Python
                            </div>
                        <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                            Django
                            </div>
                        <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                            Bootstrap
                            </div>
                        <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                            SQLite
                            </div>
                        <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                            Heroku
                            </div>
                    </div>
                </div>

                {/* Card for TigersInProduct Project */}
                <div className="flex flex-col md:flex-row items-center border-0 drop-shadow-sm rounded-lg bg-custom-bg-color2 p-5 mb-5 border-1">
                    <div className="mr-5 ml-5 w-36 shrink-0 mx-auto">

                    </div>

                    <div className="text-lg font-regular-font">
                        <div className="font-bold text-center md:text-left pb-2">Tigers In Product</div>
                        <div className="text-sm">

                        </div>
                        <div className="flex pt-2 flex-wrap">
                            <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                Python
                            </div>
                            <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                PyGame
                            </div>
                            <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                RLlib
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card for Website Project */}
                <div className="flex flex-col md:flex-row items-center border-0 drop-shadow-sm rounded-lg bg-custom-bg-color2 p-5 mb-5 border-1">
                    <div className="mr-5 ml-5 w-36 shrink-0 mx-auto">

                    </div>

                    <div className="text-lg font-regular-font">
                        <div className="font-bold text-center md:text-left pb-2">bmorck.me</div>
                        <div className="text-sm">

                        </div>
                        <div className="flex pt-2 flex-wrap">
                            <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                ReactJS
                            </div>
                            <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                Tailwindcss
                            </div>
                            <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                Netlify
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card for TriGrid Painter Project */}
                <div className="flex flex-col md:flex-row items-center border-0 drop-shadow-sm rounded-lg bg-custom-bg-color2 p-5 mb-5 border-1">
                    <div className="mr-5 ml-5 w-36 shrink-0 mx-auto">

                    </div>

                    <div className="text-lg font-regular-font">
                        <div className="font-bold text-center md:text-left pb-2">Trigrid Painter</div>
                        <div className="text-sm">

                        </div>
                        <div className="flex pt-2 flex-wrap">
                            <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                Python
                            </div>
                            <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                PyGame
                            </div>
                            <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                RLlib
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card for Uber Driver Concurrency Project */}
                <div className="flex flex-col md:flex-row items-center border-0 drop-shadow-sm rounded-lg bg-custom-bg-color2 p-5 mb-5 border-1">
                    <div className="mr-5 ml-5 w-36 shrink-0 mx-auto">

                    </div>

                    <div className="text-lg font-regular-font">
                        <div className="font-bold text-center md:text-left pb-2">Various Concurreny Demos</div>
                        <div className="text-sm">

                        </div>
                        <div className="flex pt-2 flex-wrap">
                            <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                Python
                            </div>
                            <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                PyGame
                            </div>
                            <div className="border-1 text-sm p-1 mr-4 mt-2 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                RLlib
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card for Heap Manager Project */}

                {/* Card for Distributed Key Value Store Project */}

            </div>
            <div className="md:basis-1/3"></div>
        </div >
    );
};

export default Portfolio;