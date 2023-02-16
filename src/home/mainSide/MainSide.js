import { useState } from "react";
import MainSideSearch from "./MainSideSearch";
import MainSideResultsPerPage from "./MainSideResultsPerPage";

const MainSide = function () {
  const [resPerPage, setResPerPage] = useState(10);

  const handleChange = (e) => {
    setResPerPage(e.target.value);
  };

  return (
    <div className="mainSide">
      <h1>Strona Główna</h1>
      <MainSideSearch resPerPage={resPerPage} />
      <MainSideResultsPerPage onChange={handleChange} />
    </div>
  );
};

export default MainSide;
