import { useState } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReactPaginate from "react-paginate";
import AppButton from "../../components/ui/AppButton";
import MainSideTableBody from "./MainSideTableBody";

const MainSideTable = function ({ data, resPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const dataElements = data.map((el) => ({
    id: el.id,
    repName: el.name,
    owner: el.owner.login,
    stars: el.stargazers_count,
    date: el.created_at,
  }));
  const endOffset = itemOffset + Number(resPerPage);
  const currentItems = dataElements.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dataElements.length / resPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * resPerPage) % dataElements.length;
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
        <MainSideTableBody
          dataElements={dataElements}
          currentItems={currentItems}
        />
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
            className="mainSideTable__paginate"
          />
        ) : null}
      </>
    </TableContainer>
  );
};

export default MainSideTable;
