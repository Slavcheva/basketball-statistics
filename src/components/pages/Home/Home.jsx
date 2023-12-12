import React from "react";
import "./Home.css";


export default function Home({message='Upload file to see statistics tables'}) {

    return (
            <div className="home-page">
                <p>{message}</p>
            </div>
    )
}


