import React from 'react';
import StatisticComponent from "../templates/StatisticComponent/StatisticComponent";

function MostPointsScoredInAllGameTable() {

    const headings = [
        "Player Name",
        "Team",
        "Points Score",
    ]

    return <StatisticComponent
        pageTitle={"Table for the most points scored in all matches"}
        headings={headings}
        sortCriterion={"Points Score"}
        reduceCriterion={"Player Name"}
    />}

export default MostPointsScoredInAllGameTable;