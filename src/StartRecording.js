import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import "./App.css"
export default function StartRecording(){
    return(
        <div className="startRecordingPage">
            <div className="barkBuddyTitle"></div>
            <div className="description">
            Press play to begin recording your dog’s vocalizations. 
            </div>
            <div className = "recordingBtnWrapper">
                <NavLink to="/audioRecording" style={{
                    textDecoration:"none",
                    fontSize:"3.4rem",
                    padding:"0rem 2rem",
                    borderRadius:"2rem"
                }}></NavLink>
            </div>
        </div>
    )
}