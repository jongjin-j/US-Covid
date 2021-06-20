import React from 'react'
import '../App.css'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

function Source() {
    return (
        <div>
            <div className = "source">
                <a href = 'https://apidocs.covidactnow.org/'>Link to API source</a>
            </div>
            <p className = "github">Github</p>
            <div className = "github_icon">
                <a href = 'https://github.com/jongjin-j/US-Covid'>
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
