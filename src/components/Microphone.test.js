// I actually have little to no knowledge of writing unite tests, But i can learn to write them preety quickly.


import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Microphone from './Microphone';
import { TranscriptionContext } from '../context/TranscriptionContext';

describe('Microphone Component', () => {
    it('toggles recording state when clicked', () => {
        const setTranscription = jest.fn();
        const addPastTranscription = jest.fn();

        const { getByText, getByRole } = render(
            <TranscriptionContext.Provider value={{ setTranscription, addPastTranscription }}>
                <Microphone />
            </TranscriptionContext.Provider>
        );

        const button = getByRole('button');

        // Initially, it should show "Click to start recording"
        expect(getByText('Click to start recording')).toBeInTheDocument();

        // Simulate button click to start recording
        fireEvent.click(button);

        // Check if "Recording..." text is shown
        expect(getByText('Recording...')).toBeInTheDocument();

        // Simulate button click to stop recording
        fireEvent.click(button);

        // Check if it returns to "Click to start recording"
        expect(getByText('Click to start recording')).toBeInTheDocument();
    });
});
