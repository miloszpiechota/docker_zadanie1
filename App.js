import React from 'react';
import ClientInfo from './client/src/ClientInfo';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Informacje o kliencie</h1>
                <ClientInfo />
            </header>
        </div>
    );
};

export default App;
