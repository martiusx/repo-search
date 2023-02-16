import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";

const Favorites = function () {
  const [favoriteTypeList, setFavoriteTypeList] = useState(null);

  useEffect(() => {
    const favoriteArr = JSON.parse(localStorage.getItem("favorites"));

    if (favoriteArr !== null || favoriteArr !== "[]") {
      setFavoriteTypeList(favoriteArr);
    }
    console.log(favoriteArr);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">id</TableCell>
            <TableCell align="center">Nazwa repozytorium</TableCell>
            <TableCell align="center">Właściciel</TableCell>
            <TableCell align="center">Ilość gwiazdek</TableCell>
            <TableCell align="center">Data Utworzenia</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {favoriteTypeList ? (
            favoriteTypeList.map((el, index) => {
              return (
                <TableRow key={index}>
                  <TableCell align="center">{el.id}</TableCell>
                  <TableCell align="center">{el.repName}</TableCell>
                  <TableCell align="center">{el.owner}</TableCell>
                  <TableCell align="center">{el.stars}</TableCell>
                  <TableCell align="center">{el.date}</TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell>brak ulubionych</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Favorites;
