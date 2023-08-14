import { createTheme } from "@mui/material";
import { orange, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: orange[500],
    },
    customRibRed: {
      main: red[400],
      superDark: red[800],
      superLight: red[100],
    },
  },
  typography: {
    h3: {
      fontSize: "10rem",
    },
    myVariant: {
      fontSize: "5rem",
    },
    fontSize: 4,
  },
});

export default theme;
