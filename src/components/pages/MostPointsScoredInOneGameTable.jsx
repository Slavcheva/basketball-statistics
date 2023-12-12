import React from 'react';
import StatisticComponent from "../templates/StatisticComponent/StatisticComponent";

function MostPointsScoredInOneGameTable() {

    const headings = [
        "Player Name",
        "Team",
        "Points Score",
    ]

    return <StatisticComponent
        pageTitle={"Таблица за най-много вкарани точки в един мач"}
        headings={headings}
        sortCriterion={"Points Score"}
    />}

export default MostPointsScoredInOneGameTable;