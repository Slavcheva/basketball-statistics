import React from 'react';
import StatisticComponent from "../templates/StatisticComponent/StatisticComponent";

function MostPointsScoredInAllGameTable() {

    const headings = [
        "Player Name",
        "Team",
        "Points Score",
    ]

    return <StatisticComponent
        pageTitle={"Таблица за най-много вкарани точки във всички мачове"}
        headings={headings}
        sortCriterion={"Points Score"}
        reduceCriterion={"Player Name"}
    />}

export default MostPointsScoredInAllGameTable;