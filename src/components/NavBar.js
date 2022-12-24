import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Router, Link } from "react-router-dom";



const Navbar = ({ }) => {

    const pathname = window.location.pathname

    return (
        <div className="flex justify-center sm:justify-center-0 fade-in2">
            <div class="sm:basis-1/3"></div>
            <div class="basis-4/5 sm:basis-1/2  mt-6 text-xl pt-4 pb-4 nav-border border-gray-400">
                <ul className="flex flex-row text-center text-base">
                    <Link to='/' className={`${pathname == "/" ? "text-gray-400" : "text-gray-700"} basis-1/4 hover:text-gray-400 active:text-gray-900 transition ease-in-out delay-50 duration-300`}><li>Home</li></Link>
                    <Link to='/Resume' className={`${pathname == "/Resume" ? "text-gray-400" : "text-gray-700"} basis-1/4 hover:text-gray-400 active:text-gray-900 transition ease-in-out delay-50 duration-300`}><li>Resume</li></Link>
                    <Link to='/Portfolio' className={`${pathname == "/Portfolio" ? "text-gray-400" : "text-gray-700"} basis-1/4 hover:text-gray-400 active:text-gray-900 transition ease-in-out delay-50 duration-300`}><li>Portfolio</li></Link>
                    <Link to='/Writing' className={`${pathname == "/Writing" ? "text-gray-400" : "text-gray-700"} basis-1/4 hover:text-gray-400 active:text-gray-900 transition ease-in-out delay-50 duration-300`}><li>Writing</li></Link>
                </ul>

            </div>
            <div class="sm:basis-1/3"></div>
        </div >


    )
}

export default Navbar
