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
import Resume from './Resume';




const AppRouter = ({ }) => {
    return (
        < Routes >
            <Route path="/" element={<Content />} />
            <Route path="/Home" element={<Content />} />
            <Route path="/Resume" element={<Resume />} />
        </Routes >
    )
}

export default AppRouter



