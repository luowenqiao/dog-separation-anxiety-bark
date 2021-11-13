import React from 'react'
import "./App.css"
import Home from './Home';
import AudioRecording from './AudioRecording';
import Detection from './Detection';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/audioRecording' element={<AudioRecording />} />
        <Route path='/detection' element={<Detection />} />
      </Routes>
    </Router>
  );
}