import React from 'react';
import resume from '../files/RobertMorckResume.pdf';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { ZoomInIcon, ZoomOutIcon } from '@react-pdf-viewer/zoom';

import { getFilePlugin } from '@react-pdf-viewer/get-file';
import princetonlogo from "../files/princetonlogo.png"
import legionlogo from "../files/legionhealthlogo.png"
import servicenowlogo from "../files/servicenowlogo.png"
import mongodblogo from "../files/mongodblogo.svg"

// Import styles
import '@react-pdf-viewer/zoom/lib/styles/index.css';

const Resume = () => {

    const zoomPluginInstance = zoomPlugin();
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

    const getFilePluginInstance = getFilePlugin();
    const { DownloadButton } = getFilePluginInstance;

    return (
        <div className="grow flex fade-in2 pb-10 pt-10">
            <div className="basis-1/3"></div>
            <div className="basis-1/2 rpv-core__viewer pl-5 pr-5 drop-shadow-md">
                <div className="flex flex-row justify-center bg-gray-200 rounded-t-lg">
                    <ZoomOutButton />
                    <ZoomPopover />
                    <ZoomInButton />
                </div>

                <div className="h-80 bg-white">
                    <Viewer defaultScale={0.5} fileUrl={resume} plugins={[zoomPluginInstance, getFilePluginInstance]} />
                </div>
                <div className="flex flex-row justify-center bg-gray-200 rounded-b-lg">
                    <DownloadButton />
                </div>

                <div className="pt-10 font-display-font">
                    <div>
                        <div className="text-2xl pb-5">
                            Education
                        </div>
                        <div className="grid grid-rows-1 grid-flow-col">
                            <div className="w-12 mr-5 ml-5">
                                <img src={princetonlogo} alt="Princeton University" />
                            </div>

                            <div className="text-lg">
                                <span className="font-bold">Princeton University</span> - Graduated in May 2021 with a B.S.E. in Computer Science
                            with a minor in Machine Learning
                            </div>
                        </div>
                        <div className="list-disc pl-5 pt-5">
                            Honors: Magna Cum Laude, Phi Beta Kappa, Tau Beta Pi
                            <br />


                        </div>

                        <div className="text-2xl">
                            Experience
                        </div>

                        <div className="text-2xl">
                            Skills
                        </div>

                    </div>
                </div>

            </div>
            <div className="basis-1/3"></div>
        </div>
    );
};

export default Resume;