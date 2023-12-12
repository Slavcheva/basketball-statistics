import React, {useContext} from 'react';
import "./StatisticComponent.css"
import {DataContext} from "../../../contexts/DataContext";
import {modifyData} from "../../../utils/modifyData";
import {sortData} from "../../../utils/sortData";
import Table from "../Table/Table";
import Heading from "../../atoms/Heading/Heading";

function StatisticComponent({
                                pageTitle,
                                headings,
                                sortCriterion,
                                reduceCriterion,
                                filteredData
                            }) {

    const {data} = useContext(DataContext);

    let currentData = filteredData || data;
    const modifiedData = modifyData(currentData, headings, reduceCriterion);

    if (sortCriterion) {
        sortData(modifiedData, sortCriterion)
        headings.unshift("Placement");
    }

    return (
        <DataContext.Provider value={{headings, modifiedData}}>
            <Heading type={'h2'} value={pageTitle}/>
            <Table/>
        </DataContext.Provider>
    );
}

export default StatisticComponent;