import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { TranscriptionProvider } from './context/TranscriptionContext';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);  // Initialize root with createRoot

root.render(
    <TranscriptionProvider>
        <App />
    </TranscriptionProvider>
);
