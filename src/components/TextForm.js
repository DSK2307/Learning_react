import React, { useState } from 'react';



function TextForm(props) {
    const [text, setText] = useState('');
    const [copyStatus, setCopyStatus] = useState(''); // State for the copy status

    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleclearClick=()=>{
        
        setText('');
        props.showAlert("Text Cleared","success");
    }

    const handleRemoveExtraSpaces=()=>{
        let newText=text.replace(/\s+/g,' ').trim();
        setText(newText)
        props.showAlert("Extra spaces removed","success");
    }


    const handlecopyclick = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopyStatus('Copied!'); // Show copied message
            setTimeout(() => setCopyStatus(''), 2000); // Clear the message after 2 seconds
        } catch (err) {
            console.error('Failed to copy text:', err);
            setCopyStatus('Failed to copy!');
        }
        props.showAlert("Text copied to clipboard","success");
    }

    const handleonChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'grey'}}>
                <div className="mb-3 container-sm">
                    <h1 className="h1">{props.heading}</h1>
                    <textarea
                        
                        onChange={handleonChange}
                        value={text}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="8"
                        
                        style={{
                            backgroundColor: props.mode === 'dark' ? 'grey' : 'white', 
                            color: props.mode === 'dark' ? 'white' : 'grey'
                        }}
                        
                    ></textarea>

                    <button onClick={handleUpclick} className="btn btn-primary mt-3 mr-3">Convert to Uppercase</button>
                    <button onClick={handlecopyclick} className="btn btn-primary mt-3 mr-3">Copy</button>
                    <button onClick={handleLoclick} className="btn btn-primary mt-3 mr-3">Convert to Lowercase</button>
                    <button onClick={handleRemoveExtraSpaces} className="btn btn-primary mt-3 mr-3">Remove extra spaces</button>
                    <button onClick={handleclearClick} className="btn btn-primary mt-3 ">Clear</button>
                </div>

                <div className='mb-3 container-sm'>
                    <h1 className='h2'>Your text summary</h1>
                    <p>{text.split(" ").filter((word) => word.length > 0).length} words and {text.length} characters</p>
                    <p>{0.08 * text.split(" ").filter((word) => word.length > 0).length} Minutes read</p>

                    <h1 className='mt-2 h2'>Preview</h1>
                    <p>{text.length>0?text:"Enter something in the textbox above to preview"}</p>
                    <p>{text}</p>
                    {copyStatus && <p>{copyStatus}</p>}
                </div>

                {/* Display the copy status message */}
                
            </div>
        </>
    );
}

export default TextForm;
