import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import AppButton from "./AppButton";
import { useState, useEffect } from "react";

const SingleSearchItem = function (
  { id, name, owner, stars, createData, localArr, clickHandlerAddRemove } = this
    .props
) {
  const [favoriteStatus, setFavoriteStatus] = useState(false);

  useEffect(() => {
    if (localArr.includes(id)) {
      setFavoriteStatus(true);
    } else {
      setFavoriteStatus(false);
    }
  }, [localArr, id]);

  return (
    <TableRow className="singleSearchItem">
      <TableCell align="center">{id}</TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{owner}</TableCell>
      <TableCell align="center">{stars}</TableCell>
      <TableCell align="center">{createData}</TableCell>
      <TableCell align="center">
        {favoriteStatus ? (
          <AppButton
            buttonText="Usuń z ulubionych"
            clickHandler={clickHandlerAddRemove}
          />
        ) : (
          <AppButton
            buttonText="Dodaj do ulubionych"
            clickHandler={clickHandlerAddRemove}
          />
        )}
      </TableCell>
    </TableRow>
  );
};

export default SingleSearchItem;
