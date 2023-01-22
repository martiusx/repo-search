import { useState, useEffect } from "react";

const Favorites = function () {
  const [favoriteTypeList, setFavoriteTypeList] = useState(null);
  useEffect(() => {
    const favoriteArr = JSON.parse(localStorage.getItem("favorites"));

    if (favoriteArr !== null || favoriteArr !== "[]") {
      setFavoriteTypeList(favoriteArr);
    }
  }, []);

  console.log(favoriteTypeList);

  return (
    <>
      {favoriteTypeList ? (
        favoriteTypeList.map((el, id) => {
          return (
            <>
              <p key={id}>
                {el.id} {el.repName} {el.owner}
              </p>
            </>
          );
        })
      ) : (
        <p>pusto</p>
      )}
    </>
  );
};

export default Favorites;
