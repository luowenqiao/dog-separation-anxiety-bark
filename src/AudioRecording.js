import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import "./App.css"
export default function AudioRecording(){
    return(
        <div className="startRecordingPage">
            <div className="barkBuddyTitle"></div>
            <div className="description">
            vis part
            </div>
            <div className = "stopBtnWrapper">
                <NavLink to="/startRecording" style={{
                    textDecoration:"none",
                    fontSize:"3.4rem",
                    padding:"0rem 2rem",
                    borderRadius:"2rem"
                }}></NavLink>
            </div>
            <div className = "startBtnWrapper">
                <NavLink to="/detection" className="startBtn" 
                style={{
                    color:"white",
                    textDecoration:"none",
                    fontSize:"1rem",
                    padding:"0.5rem 0.5rem",
                    borderRadius:"0.5rem",
                    backgroundColor:"#B10C0C"
                }}>To Detection Page</NavLink>
                <div className="description">
                (A helper button, the page jump will be done automatically by calling api)
                </div>
                
            </div>
        </div>
    )
}