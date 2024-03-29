import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Typewriter from 'typewriter-effect'

const IntroText = ({ }) => {

  const [typeProp, setTypeProp] = useState({
    type: true,
  });
  useEffect(() => {
    setTimeout(() => {
      setTypeProp({
        type: false
      })
    }, 7000);

    return () => { }
  }, [])

  return (
    <div className=" Name2 pl-7 pr-7 text-center">
      {(typeProp.type) ?
        (<Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(100)
              .pauseFor(1000)
              .typeString("I'm a software engineer based in New York.")
              .start();
          }}
        />) : <div>I'm a software engineer based in New York.</div>
      }
    </div>
  )
}

export default IntroText
