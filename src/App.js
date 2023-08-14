import "./App.css";
import { Button, CssBaseline, Paper, Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Paper>
        <Typography variant="h3">Hello World!</Typography>
        <Typography color="customRibRed.main">Hello MUI!</Typography>
        <h3>Start Using MUI</h3>
        <Button variant="contained" color="secondary">
          Hello
        </Button>
      </Paper>
    </div>
  );
}

export default App;
