import axios from "axios";
import { TextInput } from "@mantine/core";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (data) {
      localStorage.setItem("lastSearch", JSON.stringify(data));
    } else {
      setData(JSON.parse(localStorage.getItem("lastSearch")));
    }
  }, [data]);

  return (
    <>
      <div className="mainSideSearch">
        <TextInput
          label="Your favorite framework/library"
          placeholder="Pick one"
          onChange={(event) => onSearchChange(event.currentTarget.value)}
          value={searchValue}
        />
        <AppButton buttonText="Szukaj" clickHandler={submitHandler} />
      </div>
      <div>{data && <MainSideTable data={data} resPerPage={resPerPage} />}</div>
    </>
  );
};

export default MainSideSearch;
