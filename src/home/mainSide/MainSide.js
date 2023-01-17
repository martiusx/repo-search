import MainSideTable from "./MainSideTable";
import MainSideSearch from "./MainSideSearch";
import MainSideResultsPerPage from "./MainSideResultsPerPage";
import AppButton from "../../components/ui/AppButton";
import Nav from "../nav";

const MainSide = function () {
  return (
    <>
      <Nav />
      <h1>Strona Główna</h1>
      <MainSideSearch />
      <MainSideTable />
      <MainSideResultsPerPage />
      <div className="mainSide__buttons">
        <AppButton buttonText="Poprzednia" />
        <AppButton buttonText="Następna" />
      </div>
    </>
  );
};

export default MainSide;
