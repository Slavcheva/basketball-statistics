import TableCell from "../../atoms/TableCell/TableCell";

function TableRow({rowData, type}) {

    return (
        <tr>
            {rowData?.map((field, index) => (
                <TableCell key={index+field} value={field} type={type}/>
            ))}
        </tr>
    );
}

export default TableRow;