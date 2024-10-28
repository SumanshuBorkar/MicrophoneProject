// I actually have little to no knowledge of writing unite tests, But i can learn to write them preety quickly.

import React from 'react';
import { render } from '@testing-library/react';
import TranscriptionDisplay from './TranscriptionDisplay';
import { TranscriptionContext } from '../context/TranscriptionContext';

describe('TranscriptionDisplay Component', () => {
    it('displays the current transcription', () => {
        const transcription = 'This is a test transcription.';

        const { getByText } = render(
            <TranscriptionContext.Provider value={{ transcription }}>
                <TranscriptionDisplay />
            </TranscriptionContext.Provider>
        );

        // Check if the provided transcription is displayed
        expect(getByText(transcription)).toBeInTheDocument();
    });

    it('shows placeholder text when no transcription is present', () => {
        const { getByText } = render(
            <TranscriptionContext.Provider value={{ transcription: '' }}>
                <TranscriptionDisplay />
            </TranscriptionContext.Provider>
        );

        // Check if placeholder text is shown
        expect(getByText('Transcription will appear here...')).toBeInTheDocument();
    });
});
