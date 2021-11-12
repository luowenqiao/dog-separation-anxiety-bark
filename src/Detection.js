import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import "./App.css"
export default function Detection(){
    return(
        <div className="startRecordingPage">
            <div className="barkBuddyTitle"></div>
            <div className="description">
            Separation anxiety has been detected. 
            </div>
            <div className="decoration"></div>
            <div className = "startBtnWrapper">
                <NavLink to="/" className="startBtn" 
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