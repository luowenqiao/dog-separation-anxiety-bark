import React, { Component } from 'react'
 
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import "./App.css"
 
class App extends Component {
  constructor(props) {
    super(props)
 
    this.state = {
      recordState: null,
      audioData:null
    }
  }
  // start = () => {
  //   this.setState({
  //     recordState: RecordState.START
  //   })
  // }

  // pause = () => {
  //   this.setState({
  //     recordState: RecordState.PAUSE
  //   })
  // }
 
  // stop = () => {
  //   this.setState({
  //     recordState: RecordState.STOP
  //   })
  // }
 
  //audioData contains blob and blobUrl
  onStop = (audioData) => {
    this.setState({
      audioData: audioData
    })
    console.log('audioData', audioData)
  }

  componentDidMount(){
    this.setState({
      recordState: RecordState.START
    })
  }
  
  render() {
    const { recordState } = this.state
 
    return (
      <div>
        <h3 className="audioHeader">Audio Input and Output</h3>
        <div>
          <AudioReactRecorder 
            state={recordState}
            onStop={this.onStop}
            backgroundColor="#eeeeee"
            />
        </div> 
        <audio
          id='audio'
          controls
          src={this.state.audioData ? this.state.audioData.url : null}
        ></audio>
        {/* <button onClick={this.start} className="audioControl">Start</button>
        <button onClick={this.pause} className="audioControl">Pause</button>
        <button onClick={this.stop} className="audioControl">Stop</button> */}
      </div>
    )
  }
}

export default App;
