import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className="text-center font-display-font fade-in2 text-sm bg-custom-bg-color mb-10">
            <div className="flex flex-row justify-center space-x-2">
                <SocialIcon style={{ height: 25, width: 25 }} className="pr-1" bgColor="#9c9c9c" url="https://www.linkedin.com/in/bobbymorck/" />
                <SocialIcon style={{ height: 25, width: 25 }} className="" bgColor="#9c9c9c" url="https://github.com/bmorck" />
                <SocialIcon style={{ height: 25, width: 25 }} className="pr-1" bgColor="#9c9c9c" url="mailto:rmorck3098@gmail.com" />
                <SocialIcon style={{ height: 25, width: 25 }} className="pr-1" bgColor="#9c9c9c" url="https://www.facebook.com/bobby.morck" />
                <SocialIcon style={{ height: 25, width: 25 }} className="pr-1" bgColor="#9c9c9c" url="https://medium.com/@rmorck3098" />

            </div>
            <div className="pt-5"> Build with reactJS and tailwindcss. © Bobby Morck 2022</div>

        </div>
    );
};

export default Footer;