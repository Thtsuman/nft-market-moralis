import GenericAppBar from 'layout/GenericAppBar/GenericAppBar';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from 'views/Homepage/Homepage';
import ThemeWrapper from './assets/theme/theme'


function App() {
    return (
        <div className="app-layout">
            <Router>
                <ThemeWrapper>
                    <GenericAppBar />
                    <Routes>
                        <Route path="/" exact element={<Homepage />} />
                    </Routes>
                </ThemeWrapper>
            </Router>
        </div>
    );
}

export default App