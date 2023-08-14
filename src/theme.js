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
    fontSize: 20,
  },
});

export default theme;
