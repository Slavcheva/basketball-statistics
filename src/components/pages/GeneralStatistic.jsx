import React from 'react';
import StatisticComponent from "../templates/StatisticComponent/StatisticComponent";

function GeneralStatistic() {

    const headings = [
        "Player Name",
        "Team",
        "Time",
        "Points Score",
    ]

    return <StatisticComponent
        headings={headings}
        pageTitle={"Table with the entire information"}
    />
}

export default GeneralStatistic;