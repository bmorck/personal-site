import React, { useEffect } from 'react'

const NotFound = () => {

    useEffect(() => {
        document.title = "Page Not Found"
        return () => { }
    }, [])

    return (
        <div className="flex grow min-h-home max-h-screen bg-custom-bg-color">
            <div className="m-auto text-3xl font-display-font">
                Page Not Found
            </div>
        </div>
    );
};

export default NotFound;