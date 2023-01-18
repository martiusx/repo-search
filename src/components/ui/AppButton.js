import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const AppButton = function (props) {
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <div>
        <Button variant="contained" size="large" onClick={props.clickHandler}>
          {props.buttonText}
        </Button>
      </div>
    </Box>
  );
};

export default AppButton;
