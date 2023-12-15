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
        pageTitle={"Table for the most points scored based on playing time"}
        headings={headings}
        sortCriterion={"Points Score per Time"}
    />
}

export default MostPointsScoredByTimeTable;