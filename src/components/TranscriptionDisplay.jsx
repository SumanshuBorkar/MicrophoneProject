import React, { useContext } from 'react';
import { TranscriptionContext } from '../context/TranscriptionContext';

function TranscriptionDisplay() {
    const { transcription } = useContext(TranscriptionContext);

    return (
        <div className="" style={{display: 'flex', flexDirection: 'column', height: '20vh', width: '80%', backgroundColor: '#08090a', gap: '20px', border:'1px solid #7561fb', padding: '10px'}}>
            <h2 className="text-lg font-bold"  style={{color: 'white'}}>Live Transcription</h2>
            <p className="mt-2 text-gray-800"  style={{color: 'white'}}>{transcription || 'Transcription will appear here...'}</p>
        </div>
    );
}

export default TranscriptionDisplay;

