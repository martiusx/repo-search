import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const AppButton = function (props) {
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <Button
        className="appButton"
        variant="contained"
        size="large"
        onClick={props.clickHandler}
        onLoad={props.loadHandler}
      >
        {props.buttonText}
      </Button>
    </Box>
  );
};

export default AppButton;
