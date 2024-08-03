import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Menu } from '@mui/icons-material';

type NavProps = {
  handleOpen: () => void;
};

export default function Navbar( {handleOpen}: NavProps ) {
  return (
      <AppBar color='transparent' component='header' position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Finance Control
          </Typography>
          <Button  size='large' onClick={handleOpen} color="warning">Add Transaction</Button>
        </Toolbar>
      </AppBar>
  );
}