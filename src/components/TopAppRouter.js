import React from 'react'
import { Routes, Route } from "react-router-dom";
import NotFound from './NotFound';
import ComingSoon from './ComingSoon';
import Base from './Base';




const TopAppRouter = ({ }) => {
    return (
        < Routes >
            <Route path="/" element={<Base />} />
            <Route path="/Home" element={<Base />} />
            <Route path="/Resume" element={<Base />} />
            <Route path="/Portfolio" element={<Base />} />
            <Route path="/Writing" element={<ComingSoon />} />
            <Route path="*" element={<NotFound />} />
        </Routes >
    )
}

export default TopAppRouter
