import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import "./Main.css"
import Navigation from "../../organisms/Navigation/Navigation";
import GeneralStatistic from "../../pages/GeneralStatistic";
import MostPointsScoredByTimeTable from "../../pages/MostPoinsScoredByTimeTable";
import MostPointsScoredByTeamTable from "../../pages/MostPointsScoredByTeamTable";
import MostPointsScoredInAllGameTable from "../../pages/MostPointsScoredInAllGameTable";
import MostPointsScoredInAllGameByTeamTable from "../../pages/MostPointsScoredInAllGameByTeamTable";
import MostPointsScoredInOneGameTable from "../../pages/MostPointsScoredInOneGameTable";
import sanitizeData from "../../../utils/sanitizeData";
import {DataContext} from "../../../contexts/DataContext";
import Input from "../../atoms/Input/Input";
import Home from "../../pages/Home/Home";
import {isInvalidData} from "../../../utils/validateData";

function Main() {

    const [data, setData] = useState([]);
    const [errors, setErrors] = useState([]);


    function handleFileUpload(e) {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();
        if (file != null && file.size > 0) {
            reader.readAsText(file);

            reader.onload = function () {
                const dataString = reader.result;
                const sanitizedData = sanitizeData(dataString);

                if (!isInvalidData(sanitizedData).length) {
                    setData(sanitizedData);
                } else {
                    setErrors(isInvalidData(sanitizedData));
                }
            }
        }
    }

    return (
        <DataContext.Provider value={{data}}>
            <main className="app-content">

                <Input handleFileUpload={handleFileUpload}/>
                <Navigation/>
                {!!data.length
                    ? <>
                        <div className="statistic-page">
                            <Routes>
                                <Route path="/" element={<GeneralStatistic/>}/>
                                <Route path="/most-points-in-game" element={<MostPointsScoredInOneGameTable/>}/>
                                <Route path="/most-points-in-all-games" element={<MostPointsScoredInAllGameTable/>}/>
                                <Route path="/most-points-by-time" element={<MostPointsScoredByTimeTable/>}/>
                                <Route path="/most-team-points" element={<MostPointsScoredByTeamTable/>}/>
                                <Route path="/most-players-points-by-team"
                                       element={<MostPointsScoredInAllGameByTeamTable/>}/>
                            </Routes>
                        </div>
                    </>
                    : <Home errors={errors}/>
                }
            </main>
        </DataContext.Provider>
    );
}


export default Main;