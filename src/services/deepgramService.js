import { DEEPGRAM_API_KEY } from '../config';

// deepgramService.js
export const startDeepgramStream = (setTranscription, addPastTranscription) => {
    // Create a WebSocket connection
    const socket = new WebSocket('wss://api.deepgram.com/v1/listen', [
        'token',
        DEEPGRAM_API_KEY,
    ]);

    console.log("Connecting to Deepgram WebSocket");

    // When the connection is established
    socket.onopen = () => {
        console.log('Deepgram WebSocket connection opened.');
    };

    // Variable to accumulate transcription for the session
    let sessionTranscription = "";

    // Handle incoming transcripts from the Deepgram API
    socket.onmessage = (message) => {
        const received = JSON.parse(message.data);
        console.log('Transcript received:', received);
        const transcript = received.channel.alternatives[0].transcript;

        // Only process if it's a final transcript chunk
        if (transcript && received.is_final) {
            console.log('Final Transcript Segment:', transcript);
            sessionTranscription += ` ${transcript}`; // Append to session transcription
            setTranscription(sessionTranscription.trim()); // Display current session transcription
        }
    };

    // Handle WebSocket errors
    socket.onerror = (error) => {
        console.error('Deepgram WebSocket error:', error);
    };

    // Handle connection close
    socket.onclose = (event) => {
        // Store completed session transcription to history and reset transcription state
        if (sessionTranscription.trim()) {
            addPastTranscription(sessionTranscription.trim());
            console.log('Session Transcription saved:', sessionTranscription.trim());
        }

        // Reset transcription display and session
        setTranscription("");
        sessionTranscription = "";
        console.log('Deepgram WebSocket connection closed:', event);
    };

    // Provide methods to send data and close the connection
    return {
        send: (data) => {
            if (socket.readyState === WebSocket.OPEN) {
                socket.send(data);
                console.log('Audio data sent to WebSocket');
            }
        },
        close: () => {
            if (socket.readyState === WebSocket.OPEN) {
                socket.close();
            }
        },
    };
};
