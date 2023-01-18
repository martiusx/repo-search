import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import AppButton from "./AppButton";

const SingleSearchItem = function (props) {
  return (
    <TableRow>
      <TableCell align="left">{props.id}</TableCell>
      <TableCell align="left">{props.name}</TableCell>
      <TableCell align="left">{props.owner}</TableCell>
      <TableCell align="left">{props.stars}</TableCell>
      <TableCell align="left">{props.createData}</TableCell>
      <TableCell align="left">
        <AppButton buttonText="Dodaj do ulubionych" />
      </TableCell>
    </TableRow>
  );
};

export default SingleSearchItem;
