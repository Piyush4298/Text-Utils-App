import React, { useState } from 'react'

export default function Textform(props) {
    const onChangeHandle = (event) => {
        setText(event.target.value);
    }
    const onClickUppercase = () => {
        const txt = text.toUpperCase();
        setText(txt);
        props.showAlert("Text converted to uppercase", "success");
    }
    const onClickLowercase = () => {
        const txt = text.toLowerCase();
        setText(txt);
        props.showAlert("Text converted to lowercase", "success");
    }
    const onClickFirstLetterToUppercase = () => {
        const txtArray = text.split(' ');
        for (let i = 0; i < txtArray.length; i++) {
            txtArray[i] = txtArray[i][0].toUpperCase() + txtArray[i].substring(1);
        }
        setText(txtArray.join(" "));
        props.showAlert("First letter of each word converted to uppercase", "success");
    }
    const onClickFirstLetterToLowercase = () => {
        const txtArray = text.split(' ');
        for (let i = 0; i < txtArray.length; i++) {
            txtArray[i] = txtArray[i][0].toLowerCase() + txtArray[i].substring(1);
        }
        setText(txtArray.join(" "));
        props.showAlert("First letter of each word converted to lowercase", "success");
    }
    const onClickRemoveExtraSpaces = () => {
        const txtArray = text.split(/[ ]+/);
        setText(txtArray.join(" "))
        props.showAlert("Removed extra spaces", "success");
    }
    const onClickCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success");
    }
    const onClickClearText = () => {
        setText('');
        props.showAlert("Text cleared!", "success");
    }

    const [text, setText] = useState('');
    return (
        <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea className="form-control" placeholder='Enter text here...' id="exampleFormControlTextarea1" onChange={onChangeHandle} value={text} rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
            </div>
            <button className='btn btn-primary btn-sm mx-1' onClick={onClickUppercase}>Convert to Uppercase</button>
            <button className='btn btn-secondary btn-sm mx-1' onClick={onClickLowercase}>Convert to Lowercase</button>
            <button className='btn btn-danger btn-sm mx-1' onClick={onClickFirstLetterToUppercase}>First letter Uppercase</button>
            <button className='btn btn-success btn-sm mx-1' onClick={onClickFirstLetterToLowercase}>First letter Lowercase</button>
            <button className='btn btn-warning btn-sm mx-1' onClick={onClickCopyText}>Copy Text</button>
            <button className='btn btn-info btn-sm mx-1' onClick={onClickRemoveExtraSpaces}>Remove Extra Spaces</button>
            <button className='btn btn-primary btn-sm mx-1' onClick={onClickClearText}>Clear Text</button>
            <div className="container my-2">
                <h2>Your text summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} Minutes to read.</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "No preview available!"}</p>
            </div>
        </div>
    )
}
