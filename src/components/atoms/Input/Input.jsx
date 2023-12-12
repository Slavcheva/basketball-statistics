import React from 'react';
import "./Input.css"

function Input({handleFileUpload}) {

    return (
        <label className='file-upload'>
            Upload your data file:
            <input type="file" onChange={handleFileUpload}/>
        </label>
    );
}

export default Input;