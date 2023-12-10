import React from 'react';
import {Route, Routes} from "react-router-dom";
import {useState} from "react";
import "./Main.css"
import Navigation from "../../organisms/Navigation/Navigation";
import GeneralStatistic from "../../pages/GeneralStatistic";
import MostPointsScoredByTimeTable from "../../pages/MostPoinsScoredByTimeTable";
import MostPointsScoredByTeamTable from "../../pages/MostPointsScoredByTeamTable";
import MostPointsScoredInAllGameTable from "../../pages/MostPointsScoredInAllGameTable";
import MostPointsScoredInAllGameByTeamTable from "../../pages/MostPointsScoredInAllGameByTeamTable";
import MostPointsScoredInOneGameTable from "../../pages/MostPointsScoredInOneGameTable";
import sanitizeData from "../../../utils/sanitizeData";

function Main() {

    const [data, setData] = useState([])


    function handleFileUpload(e) {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();
        if (file != null && file.size > 0) {
            reader.readAsText(file);

            reader.onload = function () {
                const dataString = reader.result;
                const sanitizedData = sanitizeData(dataString);

                setData(sanitizedData);
            }
        }
    }

    return (
            <main className="app-content">

                <label className='file-upload'>
                    Upload your data file:
                    <input type="file" onChange={handleFileUpload}/>
                </label>

               <Navigation/>

                <Routes>
                    <Route path="/" element={<GeneralStatistic/>}/>
                    <Route path="/most-points-in-game" element={<MostPointsScoredInOneGameTable/>}/>
                    <Route path="/most-points-in-all-games" element={<MostPointsScoredInAllGameTable/>}/>
                    <Route path="/most-points-by-time" element={<MostPointsScoredByTimeTable/>}/>
                    <Route path="/most-team-points" element={<MostPointsScoredByTeamTable/>}/>
                    <Route path="/most-players-points-by-team" element={<MostPointsScoredInAllGameByTeamTable/>}/>
                </Routes>
            </main>
    );
}


export default Main;