import React from 'react'
import { Routes, Route } from "react-router-dom";
import Content from './Content';
import Resume from './Resume';
import Portfolio from './Portfolio';




const AppRouter = ({ }) => {
    return (
        < Routes >
            <Route path="/" element={<Content />} />
            <Route path="/Home" element={<Content />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Portfolio" element={<Portfolio />} />
        </Routes >
    )
}

export default AppRouter



