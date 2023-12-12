import React, {useContext} from 'react';
import {DataContext} from "../../contexts/DataContext";
import Heading from "../atoms/Heading/Heading";import StatisticComponent from "../templates/StatisticComponent/StatisticComponent";

function MostPointsScoredInAllGameByTeamTable() {

    const {data} = useContext(DataContext);

    const allTeams = data.map((row) => row.filter(e => e === row[1])).flat()
    const teams = [...new Set(allTeams)]


    const groupedData = teams.map(team => {
            const obj = {}
            obj[team] = [];

            data.forEach((row) => {
                if (Object.values(row).includes(team)) {
                    obj[team].push(row)
                }
            })
            return obj
        }
    )

    return (<>
            <Heading type={'h2'} value={"Таблица за най добър играч във всеки отбор на база вкарани точки"}/>
            {groupedData.map(o => (
                <div style={{width: "100%"}} key={Object.keys(o)}>
                    <Heading type={'h3'} value={`Top players in ${Object.keys(o)}`}/>
                    <StatisticComponent
                        filteredData={Object.values(o)[0]}
                        headings={["Player Name", "Points Score"]}
                        sortCriterion={"Points Score"}
                        reduceCriterion={"Player Name"}
                    />
                </div>
            ))}
        </>
    )
}

export default MostPointsScoredInAllGameByTeamTable;