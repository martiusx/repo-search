import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SingleSearchItem from "../../components/ui/SingleSearchItem";

const MainSideTable = function () {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="left">Nazwa repozytorium</TableCell>
            <TableCell align="left">Właściciel</TableCell>
            <TableCell align="left">Ilość gwiazdek</TableCell>
            <TableCell align="left">Data Utworzenia</TableCell>
            <TableCell align="left">Ulubione</TableCell>
          </TableRow>
        </TableHead>
        <SingleSearchItem />
      </Table>
    </TableContainer>
  );
};

export default MainSideTable;
