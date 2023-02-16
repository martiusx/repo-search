import TableBody from "@mui/material/TableBody";
import { useEffect, useState } from "react";
import SingleSearchItem from "../../components/ui/SingleSearchItem";

const MainSideTableBody = function ({ currentItems }) {
  const [favorites, setFavorites] = useState([]);

  const favoritesId = favorites.map((el) => {
    return el.id;
  });

  useEffect(() => {
    const favoriteArr = JSON.parse(localStorage.getItem("favorites"));

    if (favoriteArr && favoriteArr?.length !== 0) {
      setFavorites(favoriteArr);
    }
  }, []);

  useEffect(() => {
    if (favorites && favorites?.length !== 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  return (
    <TableBody>
      {currentItems &&
        currentItems.map((el, index) => {
          return (
            <SingleSearchItem
              element={el}
              key={index}
              id={el.id}
              name={el.repName}
              owner={el.owner}
              stars={el.stars}
              createData={el.date}
              clickHandlerAddRemove={() => {
                if (!favoritesId.includes(el.id)) {
                  console.log("add");

                  setFavorites((prevFavorites) => [...prevFavorites, el]);
                  localStorage.setItem("favorites", JSON.stringify(favorites));
                } else {
                  const favoritesAfterRemoved = favorites.filter(
                    (item) => item.id !== el.id
                  );
                  console.log("remove");
                  setFavorites(x);
                  localStorage.setItem(
                    "favorites",
                    JSON.stringify(favoritesAfterRemoved)
                  );
                }
              }}
              localArr={favoritesId}
            />
          );
        })}
    </TableBody>
  );
};

export default MainSideTableBody;
