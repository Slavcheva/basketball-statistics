import React from 'react';
import {Route, Routes} from "react-router-dom";

import "./Main.css"
import Navigation from "../../organisms/Navigation/Navigation";
import GeneralStatistic from "../../pages/GeneralStatistic";
import MostPointsScoredByTimeTable from "../../pages/MostPoinsScoredByTimeTable";
import MostPointsScoredByTeamTable from "../../pages/MostPointsScoredByTeamTable";
import MostPointsScoredInAllGameTable from "../../pages/MostPointsScoredInAllGameTable";
import MostPointsScoredInAllGameByTeamTable from "../../pages/MostPointsScoredInAllGameByTeamTable";
import MostPointsScoredInOneGameTable from "../../pages/MostPointsScoredInOneGameTable";

function Main() {


    return (
            <main className="app-content">
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