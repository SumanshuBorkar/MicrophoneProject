// PastTranscriptions.jsx
import React, { useContext } from 'react';
import { TranscriptionContext } from '../context/TranscriptionContext';

function PastTranscriptions() {
    const { pastTranscriptions } = useContext(TranscriptionContext);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '20vh', width: '80%', backgroundColor: '#08090a', gap: '20px', border: '1px solid #7561fb', padding: '10px', overflow: 'scroll' }}>
            <h2 className="text-lg font-bold" style={{ color: 'white' }}>Past Transcriptions</h2>
            {pastTranscriptions.length === 0 ? (
                <p style={{ color: 'white' }}>No past transcriptions available.</p> // Add this line
            ) : (
                <ul className="mt-2 list-disc list-inside">
                    {pastTranscriptions.map((transcription, index) => (
                        <li key={index} className="text-gray-700" style={{ color: 'white' }}>{transcription}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default PastTranscriptions;
