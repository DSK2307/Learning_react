import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

    

    const toggleMode=()=>{
        if(mode==='light'){
            setMode('dark')
            document.body.style.backgroundColor='#042743';
        }
        else{
            setMode('light')
            document.body.style.backgroundColor='white'
        }
    }

    return (
        <>
            <Navbar title="Text" mode={mode} toggleMode={toggleMode}/>
            <Alert alert="This is alert"/>
            <TextForm mode={mode}  heading="Enter the text to analyze"/>
            <About />
        </>
    );
}

export default App;
