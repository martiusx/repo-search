import MainSideSearch from "./MainSideSearch";
import MainSideResultsPerPage from "./MainSideResultsPerPage";
import { useState } from "react";

const MainSide = function () {
  const [resPerPage, setResPerPage] = useState(15);

  const handleChange = (e) => {
    setResPerPage(e.target.value);
  };

  return (
    <>
      <h1>Strona Główna</h1>
      <MainSideSearch resPerPage={resPerPage} />
      <MainSideResultsPerPage onChange={handleChange} />
    </>
  );
};

export default MainSide;
