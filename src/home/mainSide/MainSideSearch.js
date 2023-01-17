import { Select } from "@mantine/core";
import AppButton from "../../components/ui/AppButton";

const MainSideSearch = function () {
  return (
    <div className="mainSideSearch">
      <Select
        className="mainSideSearch__select"
        label=""
        placeholder="Pick one"
        searchable
        nothingFound="No options"
        data={["React", "Angular", "Svelte", "Vue"]}
      />
      <AppButton buttonText="Szukaj" />
    </div>
  );
};

export default MainSideSearch;
