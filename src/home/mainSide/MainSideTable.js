import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import SingleSearchItem from "../../components/ui/SingleSearchItem";

const MainSideTable = function (props) {
  const fullData = props.data;
  const dataElements = fullData.map((el) => ({
    id: el.id,
    repName: el.name,
    owner: el.owner.id,
    stars: el.score,
    date: el.created_at,
  }));
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
          {dataElements.map((el, index) => {
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
    </TableContainer>
  );
};

export default MainSideTable;
