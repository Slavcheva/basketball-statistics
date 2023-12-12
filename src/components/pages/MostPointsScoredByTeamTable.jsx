import React from 'react';
import StatisticComponent from "../templates/StatisticComponent/StatisticComponent";

function MostPointsScoredByTeamTable() {

    const headings = [
        "Team",
        "Points Score",
    ]

    return <StatisticComponent
        pageTitle={"Таблица за вкарани точки на база отбор"}
        headings={headings}
        sortCriterion={"Points Score"}
        reduceCriterion={"Team"}
    />
}

export default MostPointsScoredByTeamTable;