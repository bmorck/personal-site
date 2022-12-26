import React from 'react';
import resume from '../files/RobertMorckResume2022.pdf';


import legionlogo from "../files/legionhealthlogo.png"
import servicenowlogo from "../files/servicenowlogo.png"
import princetonlogo from "../files/princetonlogo.png"
import mongoDBlogo from "../files/mongodblogo.svg"


const Resume = () => {

    var browser = 0;
    var core = null
    var zoom = null
    var getFile = null
    myFunction()
    if (browser === 1) {
        core = require("@react-pdf-viewer/core")
        zoom = require("@react-pdf-viewer/zoom")
        getFile = require("@react-pdf-viewer/get-file")
        import('@react-pdf-viewer/core/lib/styles/index.css')
        import('@react-pdf-viewer/zoom/lib/styles/index.css')
    }

    function myFunction() {
        if (navigator.userAgent.indexOf("Chrome") != -1 || navigator.userAgent.indexOf("Firefox") != -1) {
            browser = 1;
        }
    }

    const zoomPluginInstance = zoom != null ? zoom.zoomPlugin() : null;
    const getFilePluginInstance = getFile != null ? getFile.getFilePlugin() : null;

    return (

        <div className="grow justify-center flex fade-in2 pb-10 pt-10">
            <div className="md:basis-1/3"></div>
            <div className="basis-4/5 md:basis-1/2 pl-5 pr-5 drop-shadow-md">
                {browser === 1 ?
                    <div>
                        <core.Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js" />
                        <div className="flex flex-row justify-center bg-gray-200 rounded-t-lg">
                            <zoomPluginInstance.ZoomOutButton />
                            <zoomPluginInstance.ZoomPopover />
                            <zoomPluginInstance.ZoomInButton />
                        </div>

                        <div className="h-80 bg-white">
                            <core.Viewer defaultScale={0.5} fileUrl={resume} plugins={[zoomPluginInstance, getFilePluginInstance]} />
                        </div>
                        <div className="flex flex-row justify-center bg-gray-200 rounded-b-lg">
                            <getFilePluginInstance.DownloadButton />
                        </div>
                    </div>

                    : null}
                <div className="pt-5 underline font-display-font">
                    <a href={resume}>
                        Resume
                    </a>
                </div>


                <div className="pt-5 font-display-font">
                    <div>
                        <div className="text-2xl pb-5 text-center md:text-left">
                            Education
                        </div>
                        <div className="flex flex-col md:flex-row items-center border-0 drop-shadow-sm rounded-lg bg-custom-bg-color2 p-5">
                            <div className="mr-5 ml-5 w-14 shrink-0 mx-auto">
                                <img src={princetonlogo} alt="Princeton University" />
                            </div>

                            <div className="text-lg ">
                                <div className="font-bold text-center md:text-left pb-2">Princeton University</div>
                                 Graduated in May 2021 with a B.S.E. in Computer Science
                                 with a minor in Machine Learning
                            </div>
                        </div>
                        <div className=" pl-5 pt-5">
                            Honors: Magna Cum Laude, Phi Beta Kappa, Tau Beta Pi
                            <br />
                            <br />
                            Technical Coursework:
                            <ul className="list-disc pl-5">
                                <li>
                                    COS 217 - Systems Programming
                                </li>
                                <li>
                                    COS 226 - Algorithms and Data Structures
                                </li>
                                <li>
                                    COS 306 - Computer Processor Design
                                </li>
                                <li>
                                    COS 302 - Mathematics for Machine Learning
                                </li>
                                <li>
                                    COS 324 - Introduction to Machine Learning
                                </li>
                                <li>
                                    ORF 333 - Advanced Programming Techniques
                                </li>
                                <li>
                                    COS 340 - Reasoning about Computation
                                </li>
                                <li>
                                    COS 429 - Computer Vision
                                </li>
                                <li>
                                    COS 432 - Information Security
                                </li>
                                <li>
                                    COS 445 - Economics and Computation
                                </li>
                                <li>
                                    COS 461 - Computer Networks
                                </li>
                                <li>
                                    ORF 245 - Fundamentals of Statistics
                                </li>
                                <li>
                                    ORF 363 - Computing and Optimization
                                </li>
                            </ul>
                            <br />
                            Other Coursework:
                            <ul className="list-disc pl-5">
                                <li>
                                    Chinese Politics, Introductory Logic, Data Science, Linguistics, Microenonomic Theory, Venture Captial, Developmental Psychology,
                                    Social Psychology, Policy Entrepreneurship, History of Entrepreneurship, Foundations of Entrepreneurship, Leadeship Development
                                </li>
                            </ul>



                        </div>

                        <div className="text-2xl pt-5 pb-5 text-center md:text-left">
                            Experience
                        </div>
                        <div className="flex flex-col md:flex-row items-center border-0 drop-shadow-sm rounded-lg bg-custom-bg-color2 p-5">
                            <div className="mr-5 ml-5 w-14 shrink-0 mx-auto">
                                <img src={mongoDBlogo} alt="MongoDB" />
                            </div>

                            <div className="text-lg ">
                                <div className="font-bold text-center md:text-left pb-2">MongoDB</div>
                                 Software Engineer on the Atlas Data Lake team (August 2021 - Present)
                                 <br />
                                Software Engineer Intern on the Billing and Payments team (June 2020 - August 2020)
                                <div className="flex pt-2">
                                    <div className="border-1 text-sm p-1 mr-4 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                        Golang
                                    </div>
                                    <div className="border-1 text-sm p-1 mr-4 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                        MongoDB
                                    </div>
                                    <div className="border-1 text-sm p-1 mr-4 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                        C++
                                    </div>
                                    <div className="border-1 text-sm p-1 mr-4 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                        Java
                                    </div>
                                    <div className="border-1 text-sm p-1 mr-4 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                        Docker
                                    </div>
                                    <div className="border-1 text-sm p-1 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                        gRPC
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center border-0 drop-shadow-sm rounded-lg bg-custom-bg-color2 p-5 mt-5">
                            <div className="mr-5 ml-5 w-14 shrink-0 mx-auto">
                                <img src={legionlogo} alt="Legion Health" />
                            </div>

                            <div className="text-lg ">
                                <div className="font-bold text-center md:text-left pb-2">Legion Health</div>
                                Product Management Intern of clinician scheduling and availability (June 2021 - August 2021)
                                <div className="flex pt-2">
                                    <div className="border-1 text-sm p-1 mr-4 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                        Figma
                                    </div>
                                    <div className="border-1 text-sm p-1 mr-4 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                        Javascript
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center border-0 drop-shadow-sm rounded-lg bg-custom-bg-color2 p-5 mt-5">
                            <div className="mr-5 ml-5 w-14 shrink-0 mx-auto">
                                <img src={servicenowlogo} alt="ServiceNow" />
                            </div>

                            <div className="text-lg ">
                                <div className="font-bold text-center md:text-left pb-2">ServiceNow</div>
                                 Software Engineer Intern on the Platforms Encryption team (May 2019 - August 2019)
                                 <div className="flex pt-2">
                                    <div className="border-1 text-sm p-1 mr-4 rounded-xl border-sky-200 bg-cyan-50 text-gray-500">
                                        Java
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>

            </div>
            <div className="md:basis-1/3"></div>
        </div >
    );
};

export default Resume;