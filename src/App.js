//import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { Stack } from '@mui/system';

function App() {
  return (
    <Stack spacing={2} direction='row'>
      <Button variant='contained' color='primary'>
        Text
      </Button>
      <Button variant='contained' color='secondary'>
        Text2
      </Button>
    </Stack>
  );
}

export default App;
