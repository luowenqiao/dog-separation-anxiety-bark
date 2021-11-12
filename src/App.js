import React, { Component } from 'react'
import "./App.css"
import Home from './Home';
import StartRecording from './StartRecording';
import AudioRecording from './AudioRecording';
import Detection from './Detection';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/startRecording' element={<StartRecording />} />
        <Route path='/audioRecording' element={<AudioRecording />} />
        <Route path='/detection' element={<Detection />} />
      </Routes>
    </Router>
  );
}