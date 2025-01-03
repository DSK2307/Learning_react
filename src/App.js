import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
    const [mode, setMode] = useState('light'); // Dark/Light mode state
    const [alert, setAlert] = useState(null); // Alert state

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark mode has been enabled", "success");
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
        }
    };

    const showAlert = (message, type) => {
        setAlert({ msg: message, type: type });
        setTimeout(() => setAlert(null), 3000); // Clear alert after 3 seconds
    };

    return (
        <>
            <Navbar title="Text" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />

            <div className="container my-3">
                <Routes>
                    <Route
                        exact path="/"  //exact help us to navigate to the exact path
                        element={
                            <TextForm
                                mode={mode}
                                showAlert={showAlert}
                                heading="Enter the text to analyze"
                            />
                        }
                    />
                    <Route exact path="/about" element={<About />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
