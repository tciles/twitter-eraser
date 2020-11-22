import React from "react";
import {TableContainer, Table, TableBody, TableHead, TableRow, TableCell, TablePagination} from "@material-ui/core";

const CsvTable = ({rows}) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const headers = rows[0];
    const items = rows.slice(1).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    if (rows.length < 1) {
        return null;
    }

    return (
        <React.Fragment>
            <TableContainer style={{marginTop: "16px"}}>
                <Table>
                    <TableHead style={{background: "#e4e4e4"}}>
                        <TableRow>
                            {headers.map((header, index) => <TableCell key={index} style={{fontWeight: "bold"}}>{header}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item, index) => (
                            <TableRow key={index}>
                                {item.map((value, k) => <TableCell key={k}>{value}</TableCell>)}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </React.Fragment>
    )
}

export default CsvTable;
