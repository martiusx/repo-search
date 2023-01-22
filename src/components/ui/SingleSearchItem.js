import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import AppButton from "./AppButton";
import { useState, useEffect } from "react";

const SingleSearchItem = function (
  { id, name, owner, stars, createData, localArr, clickHandlerAdd } = this.props
) {
  const [favoriteStatus, setFavoriteStatus] = useState(false);

  useEffect(() => {
    if (localArr.includes(id)) {
      setFavoriteStatus(true);
    } else {
      setFavoriteStatus(false);
    }
  });

  return (
    <TableRow>
      <TableCell align="left">{id}</TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="left">{owner}</TableCell>
      <TableCell align="left">{stars}</TableCell>
      <TableCell align="left">{createData}</TableCell>
      <TableCell align="left">
        {favoriteStatus ? (
          <AppButton
            buttonText="Usuń z ulubionych"
            clickHandler={clickHandlerAdd}
          />
        ) : (
          <AppButton
            buttonText="Dodaj do ulubionych"
            clickHandler={clickHandlerAdd}
          />
        )}
      </TableCell>
    </TableRow>
  );
};

export default SingleSearchItem;
