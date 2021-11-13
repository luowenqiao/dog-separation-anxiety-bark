import React from 'react'
import { NavLink } from "react-router-dom"
import "./App.css"
export default function Detection(){
    return(
        <div className="detectionPage">
            <div className="barkBuddyTitle"></div>
            <div className="description">
            Separation anxiety has been detected. 
            </div>
            <div className="decoration"></div>
            <div className = "generalBtnWrapper">
                <NavLink to="/" className="generalBtn" 
                style={{
                    color:"white",
                    textDecoration:"none",
                    fontSize:"1.4rem",
                    padding:"0.8rem 3rem",
                    borderRadius:"0.5rem",
                    backgroundColor:"#B10C0C"
                }}>Back</NavLink>
        </div>
        </div>
    )
}