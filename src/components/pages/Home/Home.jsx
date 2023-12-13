import React from "react";
import "./Home.css";


export default function Home({errors}) {
    return (
        <div className="home-page">
            {!errors.length
                ? <h4>Upload file or load data from database to see statistics</h4>
                : <>
                    {errors.map(error =>
                        <h4 key={error} className="error">Data on row {error} is invalid</h4>)}
                    <p>In order to receive correct statistics, it is necessary to submit valid data.</p>
                    <p>Please correct the data and upload the file again.</p>
                </>
            }
        </div>
    )
}


