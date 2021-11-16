import React from 'react'
import { ReactMic } from 'react-mic';
import { NavLink} from "react-router-dom"
import "./App.css"

export default class AudioRecording extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          record: false,
          display: false,
          timeCount: 0,
        }
      }
    
      startRecording = () => {
        this.setState({ record: true, display:true });

        //start the 30s timer
        this.interval = setInterval(()=>this.tick(),1000);
      }
    
      stopRecording = () => {
        this.setState({ record: false, display:false});

        // terminate the timer
        clearInterval(this.interval);
        this.setState({timeCount:0 });
      }
    
      onData(recordedBlob) {
        //console.log('chunk of real-time data is: ', recordedBlob);
      }

      onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
      }
    
      // calculate the time
      // if: it reaches 30s, stop and restart
      // else: keep counting
      tick(){
        if(this.state.timeCount === 30){
            //terminate the previous
            this.setState({ record: false });
            this.setState({ timeCount:0 });

            //restart the new recording
            setTimeout(()=>this.setState({ record: true }),1);
        }
        else{
            this.setState((prevState)=>({
                timeCount:prevState.timeCount+1
            }))
        }
      }

      componentWillUnmount(){
        this.stopRecording();
      }
    
      render() {
        return (
            <div className="recordingPage">
                <div className="barkBuddyTitle"></div>
                {/* audio vis */}
                <div className={this.state.display?"audioVis":"invisible"}>
                    <ReactMic
                        record={this.state.record}
                        className="sound-wave"
                        onStop={this.onStop}
                        onData={this.onData}
                        strokeColor="#FFFFFF"
                        backgroundColor="#000000" />
                </div>

                {/* end recording button */}
                <div className = {this.state.display?"stopBtnWrapper":"invisible"}>
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
                <div className={this.state.display?"invisible":"description"}>
                    Press play to begin recording your dog’s vocalizations. 
                </div>

                {/* start recording button */}
                <div className={this.state.display?"invisible":"recordingBtnWrapper"}>
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
