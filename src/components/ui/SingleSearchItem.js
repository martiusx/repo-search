import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import AppButton from "./AppButton";

//test data <
function createData(id, name, owner, stars, createData) {
  return { id, name, owner, stars, createData };
}

const rows = [createData(39316535, "react", "azat-co", "225", "19.07.2015")];
//test data >

const SingleSearchItem = function () {
  return (
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell align="left">{row.name}</TableCell>
          <TableCell align="left">{row.owner}</TableCell>
          <TableCell align="left">{row.stars}</TableCell>
          <TableCell align="left">{row.createData}</TableCell>
          <TableCell align="left">
            <AppButton buttonText="Dodaj do ulubionych" />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default SingleSearchItem;
