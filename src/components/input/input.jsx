import { TextField } from '@mui/material';

function MuiInput({ variant, children }) {
  return <TextField variant={variant} label={children}></TextField>;
}

export default MuiInput;
