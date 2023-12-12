import React from 'react';
import "./Table.css"
import TableHead from "../../organisms/TableHead/TableHead";
import TableBody from "../../organisms/TableBody/TableBody";

function Table() {

    return (
        <table>
            <TableHead/>
            <TableBody/>
        </table>
    );
}

export default Table;