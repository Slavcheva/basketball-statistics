import React, {useContext} from 'react';
import {DataContext} from "../../../contexts/DataContext";
import TableRow from "../../molecules/TableRow/TableRow";

function TableBody() {
    const {headings,modifiedData} = useContext(DataContext);

    return (
        <tbody >
        {modifiedData.map((row,index) => {
            const rowData = headings.map(e=>{
                return e && row[e];
            })

            return <TableRow key={index} type={'cell'} rowData={rowData}/>
        })}

        </tbody>
    );
}

export default TableBody;
