import React from 'react';
import Microphone from './components/Microphone';
import TranscriptionDisplay from './components/TranscriptionDisplay';
import PastTranscriptions from './components/PastTranscriptions';
import './index.css';

function App() {
    return (
        <div className="MainContianer" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#08090a', gap: '5vh'}}> 
            <h1 className="" style={{fontSize: '3rem', fontWeight: 'bold', color: 'white'}}>Real-Time Audio Transcription</h1>
            <Microphone />
            <TranscriptionDisplay />
            <PastTranscriptions />
        </div>
    );
}

export default App;
