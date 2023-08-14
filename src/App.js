import './App.css';
import { Button, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Typography variant='h3' >Hello World!</Typography>
      <Typography color='primary'>Hello MUI!</Typography>
      <h3>Start Using MUI</h3>
      <Button variant='contained' color='secondary'>
        Hello
      </Button>
      
    </div>
  );
}

export default App;
