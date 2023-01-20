import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const MainSideResultsPerPage = function (props) {
  return (
    <div className="mainSideResultsPerPage">
      <span>Wyników na stronę:</span>
      <Box>
        <FormControl sx={{ width: 300 }}>
          <NativeSelect
            defaultValue={15}
            inputProps={{
              id: "uncontrolled-native",
            }}
            onChange={props.onChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={30}>30</option>
          </NativeSelect>
        </FormControl>
      </Box>
    </div>
  );
};

export default MainSideResultsPerPage;
