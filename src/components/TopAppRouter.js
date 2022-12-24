import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import IntroText from './IntroText';
import NotFound from './NotFound';
import ComingSoon from './ComingSoon';
import Content from './Content';
import Base from './Base';
import Navbar from './NavBar';




const TopAppRouter = ({ }) => {
    return (
        < Routes >
            <Route path="/" element={<Base />} />
            <Route path="/Home" element={<Base />} />
            <Route path="/Resume" element={<Base />} />
            <Route path="/Portfolio" element={<ComingSoon />} />
            <Route path="/Writing" element={<ComingSoon />} />
            <Route path="*" element={<NotFound />} />
        </Routes >
    )
}

export default TopAppRouter
