import {
    NavLink
  } from "react-router-dom";
import "./App.css"

export default function Home(){
    return(
        <div className="homePage">
            <div className="barkBuddyTitle"></div>
            <div className="description">
            An effective way to manage your dog’s separation anxiety!
            </div>
            <div className = "generalBtnWrapper">
                <NavLink to="/audioRecording" className="generalBtn" 
                style={{
                    color:"white",
                    textDecoration:"none",
                    fontSize:"1.4rem",
                    padding:"0.8rem 3rem",
                    borderRadius:"0.5rem",
                    backgroundColor:"#B10C0C"
                }}>Begin</NavLink>
            </div>
        </div>
    )
}