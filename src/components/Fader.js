import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import '../App.css';

const Fader = ({text}) => {
    const [fadeProp, setFadeProp] = useState({
        fade: ''
    });

    return (
        <div>
            <div className={`Name fade-in2`}>
                {text}
            </div>
        </div>
    )
}

Fader.defaultProps = {
    text: 'Hello there'
}

Fader.propTypes = {
    text: PropTypes.string
}

export default Fader
