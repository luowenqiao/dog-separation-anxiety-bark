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

  download = (data, filename, type)=> {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
  }
  start = () => {
    this.setState({
      recordState: RecordState.START
    })
  }

  pause = () => {
    this.setState({
      recordState: RecordState.PAUSE
    })
  }
 
  stop = () => {
    this.setState({
      recordState: RecordState.STOP
    })
  }
 
  //audioData contains blob and blobUrl
  onStop = (audioData) => {
    this.setState({
      audioData: audioData
    })
    console.log('audioData', audioData);

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    var dateTime = date+'_'+time;
    this.download(audioData,dateTime+".wav","audio/wav");
  }

  // componentDidMount(){
  //   this.setState({
  //     recordState: RecordState.START
  //   })
  // }
  
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
        <button onClick={this.start} className="audioControl">Start</button>
        <button onClick={this.pause} className="audioControl">Pause</button>
        <button onClick={this.stop} className="audioControl">Stop and Save</button>
      </div>
    )
  }
}

export default App;
