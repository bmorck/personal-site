import React, { useEffect } from 'react'

const ComingSoon = () => {

    useEffect(() => {
        document.title = "Coming Soon"
        return () => { }
    }, [])

    return (
        <div className="flex grow min-h-home max-h-screen bg-custom-bg-color">
            <div className="m-auto text-3xl font-display-font">
                Coming Soon
            </div>
        </div>
    );
};

export default ComingSoon;