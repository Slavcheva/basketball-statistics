import React,{useContext} from 'react';
import {DataContext} from "../../../contexts/DataContext";
import TableRow from "../../molecules/TableRow/TableRow";
import "./TableHead.css"

function TableHead() {
    const {headings} = useContext(DataContext);

    return (
        <thead>
            <TableRow type={"heading"} rowData={headings}/>
        </thead>
    );
}

export default TableHead;