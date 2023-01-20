import axios from "axios";
import { Select } from "@mantine/core";
import { useState } from "react";
import AppButton from "../../components/ui/AppButton";
import MainSideTable from "./MainSideTable";

const MainSideSearch = function ({ resPerPage }) {
  const [data, setData] = useState(null);
  const [searchValue, onSearchChange] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    axios
      .get(`https://api.github.com/search/repositories?q=${searchValue}`)
      .then((res) => {
        setData(res.data.items);
        return data;
      })
      .catch((error) => {
        console.log(`ERROR! ${error}`);
      });
  };

  return (
    <>
      <div className="mainSideSearch">
        <Select
          label="Your favorite framework/library"
          placeholder="Pick one"
          searchable
          onSearchChange={(e) => onSearchChange(e)}
          searchValue={searchValue}
          nothingFound="No options"
          data={["React", "Angular", "Svelte", "Vue"]}
        />
        <AppButton buttonText="Szukaj" clickHandler={submitHandler} />
      </div>
      <div>{data && <MainSideTable data={data} resPerPage={resPerPage} />}</div>
    </>
  );
};

export default MainSideSearch;
