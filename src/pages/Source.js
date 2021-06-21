import React from 'react'
import './Source.css'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

function Source() {
    return (
        <div className = "source-container">
            <div className = "source">
                <a target = "_blank" rel = "noopener noreferrer" href = 'https://apidocs.covidactnow.org/'>Link to API source</a>
            </div>
            <p className = "github">Github</p>
            <div className = "github_icon">
                <a target = "_blank" rel = "noopener noreferrer" href = 'https://github.com/jongjin-j/US-Covid'>
                    <AiIcons.AiFillGithub fontSize = "40"/>
                </a>
            </div>
            <div className = "arrow">
                <IoIcons.IoMdArrowForward/>
            </div>
        </div>
    )
}

export default Source
