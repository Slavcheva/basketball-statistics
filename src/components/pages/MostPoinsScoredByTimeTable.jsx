import React from 'react';
import StatisticComponent from "../templates/StatisticComponent/StatisticComponent";

function MostPointsScoredByTimeTable() {

    const headings = [
        "Player Name",
        "Team",
        "Time",
        "Points Score",
        "Points Score per Time",
    ]

    return <StatisticComponent
        pageTitle={"Таблица за вкарани точки на база играно време"}
        headings={headings}
        sortCriterion={"Points Score per Time"}
    />
}

export default MostPointsScoredByTimeTable;