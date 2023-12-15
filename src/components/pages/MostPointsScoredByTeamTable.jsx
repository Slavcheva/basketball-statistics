import React from 'react';
import StatisticComponent from "../templates/StatisticComponent/StatisticComponent";

function MostPointsScoredByTeamTable() {

    const headings = [
        "Team",
        "Points Score",
    ]

    return <StatisticComponent
        pageTitle={"Table for points scored based on team"}
        headings={headings}
        sortCriterion={"Points Score"}
        reduceCriterion={"Team"}
    />
}

export default MostPointsScoredByTeamTable;