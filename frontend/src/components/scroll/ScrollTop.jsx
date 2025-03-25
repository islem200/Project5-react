import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";

function ScrollTop() {
  return (
    <Zoom in={useScrollTrigger({ threshold: 500 })}>
      <Fab
        onClick={() => {
          scrollTo(0, 0);
        }}
        variant="extended"
        size="small"
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
}

export default ScrollTop;
