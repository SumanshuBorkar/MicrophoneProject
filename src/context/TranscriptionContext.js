import React, { createContext, useState } from 'react';

export const TranscriptionContext = createContext();

export function TranscriptionProvider({ children }) {
    const [transcription, setTranscription] = useState("");
    const [pastTranscriptions, setPastTranscriptions] = useState([]);
    const [count, setcount] = useState(0)

    const addPastTranscription = (transcription) => {
        setPastTranscriptions((prev) => [...prev, transcription]);
    };

    return (
        <TranscriptionContext.Provider value={{ transcription, setTranscription, pastTranscriptions, addPastTranscription , count, setcount}}>
            {children}
        </TranscriptionContext.Provider>
    );
}
