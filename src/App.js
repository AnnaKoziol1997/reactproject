//import logo from './logo.svg';
import './App.css';
import { Button, Box, TextField} from '@mui/material';
import { Stack} from '@mui/system';

function App() {
  return (
    <Box textAlign='center'>
    <Stack display='block' spacing={2} direction='row'>
    <TextField id="standard-basic" label="Standard" variant="standard">

    </TextField>
        <Button variant='contained' color='primary'size='small'>
        Text
        </Button>
        <Button variant='contained' color='secondary' size='small'>
          Text2
        </Button>
      
      
    </Stack>
    </Box>
  );
}

export default App;
