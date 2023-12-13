import React from 'react';
import "./Input.css"

function Input(
    {
        handleLoadDataFromDB,
        handleFileUpload,
        className,
        type,
        value,
        labelText,
    }
) {

    return (
        <div className={className}>
            <label>
                {labelText}
                <input
                    type={type}
                    value={value}
                    onChange={handleFileUpload}
                    onClick={handleLoadDataFromDB}
                />
            </label>
        </div>
    );
}

export default Input;