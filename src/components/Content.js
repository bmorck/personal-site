import React from 'react';

const Content = () => {
    return (
        <div className="grow flex justify-center fade-in2 pl-5 pr-5 pb-10">
            <div className="md:basis-1/3"></div>
            <div className="basis-4/5 md:basis-1/2 mt-10 text-gray-600  font-regular-font">
                Hello and welcome to my site. I'm a computer science graduate from Princeton
                University and I'm currently working at Netflix. In my current role,
                I work on the Big Data Compute and Warehouse team  where we are responsible for distributed
                data processing. I enjoy exploring topic areas of distributed systems, blockchain, and machine learning;
                specifically I'm interested in generative AI at the moment.
                <br />
                <br />
                Here you can learn more about my work experience, projects,
                interests, and random musings.
                <br />
                <br />
                Outside of work I'm passionate about fitness, and I'm always happy to chat about
                weightlifting and nutrition. I'm currently diving into boxing and looking to improve my
                driver.
            </div >
            <div className="md:basis-1/3"></div>
        </div >
    );
};

export default Content;