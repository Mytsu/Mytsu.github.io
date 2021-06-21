import React from 'react';
import Header from './components/Header';
import Particles from './components/Particles';
import Introduction from './components/Introduction';

export default function App() {
    return (
        <React.Fragment>
            <Particles />
            <Header />
            <Introduction />
        </React.Fragment>
    );
}
