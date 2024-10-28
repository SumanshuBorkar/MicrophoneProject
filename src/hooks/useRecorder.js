import { useState, useContext, useRef } from 'react';
import { TranscriptionContext } from '../context/TranscriptionContext';
import { startDeepgramStream } from '../services/deepgramService';

export function useRecorder() {
    const [isRecording, setIsRecording] = useState(false);
    const { setTranscription, addPastTranscription } = useContext(TranscriptionContext);

    const mediaRecorderRef = useRef(null);
    const audioStreamRef = useRef(null);
    const socketRef = useRef(null);

    const startRecording = async () => {
        try {
            // Access the user's microphone
            audioStreamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(audioStreamRef.current, {
                mimeType: 'audio/webm', // Using 'audio/webm' as in your working example
            });

            // Close any existing WebSocket connection before starting a new one
            if (socketRef.current) {
                socketRef.current.close();
            }

            // Start a new WebSocket connection
            socketRef.current = startDeepgramStream(setTranscription, addPastTranscription);

            // Send audio data to WebSocket
            mediaRecorderRef.current.addEventListener('dataavailable', (event) => {
                if (event.data.size > 0 && socketRef.current && socketRef.current.send) {
                    socketRef.current.send(event.data);
                }
            });

            // Start recording, sending data every second
            mediaRecorderRef.current.start(1000);
            setIsRecording(true);
            console.log("Recording started...");
        } catch (error) {
            console.error('Error accessing microphone:', error);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            console.log("Recording stopped.");
        }

        if (audioStreamRef.current) {
            audioStreamRef.current.getTracks().forEach(track => track.stop());
            audioStreamRef.current = null;
        }

        // Close the WebSocket when stopping the recording
        if (socketRef.current && socketRef.current.close) {
            console.log("MediaRecorder stopped, closing WebSocket.");
            socketRef.current.close();
            socketRef.current = null;
        }

        setIsRecording(false);
    };

    return { isRecording, startRecording, stopRecording };
}
