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
        pageTitle={"Таблица с цялата информация от файла"}
    />
}

export default GeneralStatistic;