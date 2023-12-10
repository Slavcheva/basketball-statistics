import React, {useContext} from 'react';
import "./Input.css"
import {DataContext} from "../../../contexts/DataContext";

function Input() {
    const {handleFileUpload} = useContext(DataContext)

    return (
        <label className='file-upload'>
            Upload your data file:
            <input type="file" onChange={handleFileUpload}/>
        </label>
    );
}

export default Input;