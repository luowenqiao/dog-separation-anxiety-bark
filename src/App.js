import React, { Component } from 'react'
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import uniqid from 'uniqid'
import "./App.css"
 
class App extends Component {
  constructor(props) {
    super(props)
 
    this.state = {
      recordState: null,
      audioData:null,
      randomKey:"",
      contextName:"e",

      time: 0,
      on: false
    }
    this.onChangeValue = this.onChangeValue.bind(this);
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

    if (this.state.on) {
      clearInterval(this.timer);
    } else {
      this.timer = setInterval(() => {
          this.setState({time: this.state.time+1})
      }, 10)
    }
    this.setState({on: !this.state.on})
  }

  pause = () => {
    this.setState({
      recordState: RecordState.PAUSE
    })
  }
 
  stop = () => {
    this.setState({
      recordState: RecordState.STOP,
      time:0,
      on:false
    })
    clearInterval(this.timer);
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
    var fileName = this.state.contextName+'_'+date+'_'+time+'_'+this.state.randomKey;
    this.download(audioData,fileName+".wav","audio/wav");
  }

  onChangeValue(e){
    this.setState({
      contextName:e.target.value
    })
  }

  // componentDidMount(){
  //   this.setState({
  //     recordState: RecordState.START
  //   })
  // }

  componentDidMount(){
    this.setState({
      randomKey:uniqid()
    })
  }

  formatTime(t = 0) {
    const msec = this.appendZero(Number.parseInt(t % 100)),
    sec = this.appendZero(Number.parseInt(t/100%60)),
     min = this.appendZero(Number.parseInt(t/6000%60)),
     hour = this.appendZero(Number.parseInt(t/360000));

    return `${hour}:${min}:${sec}.${msec}`;
  }
  appendZero = n=>n.toLocaleString({},{minimumIntegerDigits:2});
  
  render() {
    const { recordState } = this.state
    var time = this.formatTime(this.state.time);
 
    return (
      <div className = "wrapper">
        {/* title */}
        <h2 className="audioHeader">A Recording Tool for Dog Barks - Bark Buddy</h2>

        {/* controls */}
        <div className="conditionInput" onChange={this.onChangeValue}>
          <b style={{paddingLeft:'10px'}}>Please select a context:</b>
          <label><input name="context" type="radio" value="e" defaultChecked/>Excitement </label> 
          <label><input name="context" type="radio" value="s" />Separation Anxiety</label> 
          <label><input name="context" type="radio" value="a" />Alarm</label> 
        </div>
        <div className = "audioControllers">
          <button onClick={this.start} className="btn">Start</button>
          {/* <button onClick={this.pause} className="btn">Pause</button> */}
          <button onClick={this.stop} className="btn">Stop and Save</button>
        </div>
        <div className = "audioData">
          <h4 className="time_displayer">{time}</h4>
          <audio
            id='audio'
            controls
            src={this.state.audioData ? this.state.audioData.url : null}
          ></audio>
        </div>

        

        {/* vis */} 
        <div className = "audioRecorder">
          <AudioReactRecorder 
            state={recordState}
            onStop={this.onStop}
            backgroundColor="#eeeeee"
            />
        </div>

        {/* instructions */}
        <div className="instructions">
          <b>Instructions:</b>
          <ol>
            <li>Set up your laptop with a microphone in <b>close proximity</b> to your dog.</li>
            <li>Place your canine in 3 different contexts and <b>select the context</b>:
              <ul>
                <li>Bring out the dog’s favorite toy or favorite food to elicit <b>excitement</b>.</li>
                <li>Place the dog in an enclosed space and leave the room to elicit <b>separation anxiety</b>. </li>
                <li>Place the dog in a room and have a stranger walk past the room to elicit <b>alarm</b>. </li>
              </ul>
            </li>
            <li>Click <b>start</b> to start recording dog sounds in each context. Each situation should be recorded for 5-7 minutes. </li>
            <li>Click <b>stop and save</b> to download the audio recordings.</li>
            <li>Send over audio files to: <b><i>kaavyasinghal2828@gmail.com</i></b></li>
          </ol>
        </div>
      </div>
    )
  }
}

export default App;
