import { Button } from '@mui/material';

function MuiButton({ variant, children }) {
  return <Button variant={variant}>{children}</Button>;
}

export default MuiButton;
