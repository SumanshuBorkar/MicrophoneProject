
// I actually have little to no knowledge of writing unite tests, But i can learn to write them preety quickly.


import React from 'react';
import { render } from '@testing-library/react';
import PastTranscriptions from './PastTranscriptions';
import { TranscriptionContext } from '../context/TranscriptionContext';

describe('PastTranscriptions Component', () => {
    it('displays past transcriptions', () => {
        const pastTranscriptions = ['First transcription', 'Second transcription'];

        const { getByText } = render(
            <TranscriptionContext.Provider value={{ pastTranscriptions }}>
                <PastTranscriptions />
            </TranscriptionContext.Provider>
        );

        // Check if both transcriptions are displayed
        expect(getByText('First transcription')).toBeInTheDocument();
        expect(getByText('Second transcription')).toBeInTheDocument();
    });

    it('shows a message when no past transcriptions are available', () => {
        const { getByText } = render(
            <TranscriptionContext.Provider value={{ pastTranscriptions: [] }}>
                <PastTranscriptions />
            </TranscriptionContext.Provider>
        );

        // Check if the correct message is displayed when there are no past transcriptions
        expect(getByText('No past transcriptions available.')).toBeInTheDocument();
    });
});
