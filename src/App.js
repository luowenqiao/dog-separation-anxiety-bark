import React, { Component} from 'react'
 
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import "./App.css"
 
class App extends Component {
  constructor(props) {
    super(props)
 
    this.state = {
      recordState: null,
      audioData:null,
      time:0
    }
  }

  //audioData contains blob and blobUrl
  onStop = (audioData) => {
    this.setState({
      audioData: audioData,
      recordState: RecordState.START
    })
    console.log('audioData', audioData)
  }

  //Make the audio start when the screen is loaded
  componentDidMount(){
    this.setState({
      recordState: RecordState.START
    })
    setInterval(this.clip,5000)
  }

  //Make an audio clip
  clip=()=>{
    this.setState({
      recordState: RecordState.STOP
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
        <button onClick={this.clip} className="audioControl">Make an audio clip</button>
      </div>
    )
  }
}

export default App;
