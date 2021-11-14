import React from 'react'
import { ReactMic } from 'react-mic';
import { NavLink} from "react-router-dom"
import "./App.css"

export default class AudioRecording extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          record: false,
        }
      }
    
      startRecording = () => {
        this.setState({ record: true });
      }
    
      stopRecording = () => {
        this.setState({ record: false });
      }
    
      onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
      }
    
      onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
      }

      render() {
        return (
            <div className="recordingPage">
                <div className="barkBuddyTitle"></div>

                {/* audio vis */}
                <div className={this.state.record?"audioVis":"invisible"}>
                    <ReactMic
                        record={this.state.record}
                        className="sound-wave"
                        onStop={this.onStop}
                        onData={this.onData}
                        strokeColor="#FFFFFF"
                        backgroundColor="#000000" />
                </div>

                {/* end recording button */}
                <div className = {this.state.record?"stopBtnWrapper":"invisible"}>
                    <button 
                    onClick={this.stopRecording}
                    type="button"
                    style={{
                        backgroundColor:"transparent",
                        display:'block',
                        width:"4rem",
                        height:"4rem",
                        borderRadius:"2rem",
                        cursor:"pointer"
                    }} />
                </div>
                        
                {/* start description*/}
                <div className={this.state.record?"invisible":"description"}>
                    Press play to begin recording your dog’s vocalizations. 
                </div>

                {/* start recording button */}
                <div className={this.state.record?"invisible":"recordingBtnWrapper"}>
                    <button onClick={this.startRecording}
                    type="button"
                     style={{
                        backgroundColor:"transparent",
                        display:'block',
                        width:"4rem",
                        height:"4rem",
                        borderRadius:"2rem",
                        cursor:"pointer"
                    }} />
                </div>

                {/* A helper button, will be deleted afterwards */}
                <div className = "generalBtnWrapper">
                    <NavLink to="/detection" className="generalBtn"
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
}
