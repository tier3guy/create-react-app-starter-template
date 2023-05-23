// Internal Imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// External Imports
import { BrowserRouter } from 'react-router-dom';

// Styles
import './styles/index.css';

// Components
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
