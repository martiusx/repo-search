import { useState } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import SingleSearchItem from "../../components/ui/SingleSearchItem";
import ReactPaginate from "react-paginate";
import AppButton from "../../components/ui/AppButton";

const MainSideTable = function ({ data, resPerPage }) {
  const fullData = data;
  const dataElements = fullData.map((el) => ({
    id: el.id,
    repName: el.name,
    owner: el.owner.id,
    stars: el.score,
    date: el.created_at,
  }));

  const itemsPerPage = resPerPage;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = dataElements.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dataElements.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dataElements.length;
    setItemOffset(newOffset);
  };

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
        <TableBody>
          {currentItems &&
            currentItems.map((el, index) => {
              return (
                <SingleSearchItem
                  key={index}
                  id={el.id}
                  name={el.repName}
                  owner={el.owner}
                  stars={el.stars}
                  createData={el.date}
                />
              );
            })}
        </TableBody>
      </Table>
      <>
        {pageCount > 1 ? (
          <ReactPaginate
            breakLabel="..."
            nextLabel={<AppButton buttonText="Następna" />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<AppButton buttonText="Poprzednia" />}
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
          />
        ) : null}
      </>
    </TableContainer>
  );
};

export default MainSideTable;
