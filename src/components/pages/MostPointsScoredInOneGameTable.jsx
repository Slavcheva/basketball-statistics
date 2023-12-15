import React from 'react';
import StatisticComponent from "../templates/StatisticComponent/StatisticComponent";

function MostPointsScoredInOneGameTable() {

    const headings = [
        "Player Name",
        "Team",
        "Points Score",
    ]

    return <StatisticComponent
        pageTitle={"Table for the most points scored in a single game."}
        headings={headings}
        sortCriterion={"Points Score"}
    />}

export default MostPointsScoredInOneGameTable;