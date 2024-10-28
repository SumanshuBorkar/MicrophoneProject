import React from 'react';
import { useRecorder } from '../hooks/useRecorder';
import { FiMic, FiMicOff } from 'react-icons/fi';

function Microphone() {
    const { isRecording, startRecording, stopRecording } = useRecorder();

    return (
        <div className="" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '20vh', backgroundColor: '#08090a', gap: '20px'}}>
            <button
                onClick={isRecording ? stopRecording : startRecording}
                style={{backgroundColor: isRecording? 'red' : '#7561fb', borderRadius: '50%', border: '1px solid white', cursor: 'pointer', outline: 'none', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            >
                {isRecording ? <FiMicOff size={24} /> : <FiMic size={24} />}
            </button>
            <p className="mt-2 text-gray-700" style={{color: 'white'}}>{isRecording ? 'Recording...' : 'Click to start recording'}</p>
        </div>
    );
}

export default Microphone;
