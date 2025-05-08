import React from 'react';
import { AppBar, Toolbar, Typography, Button, Switch, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Movie Explorer
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/search">
          Search
        </Button>
        <Button color="inherit" component={Link} to="/favorites">
          Favorites
        </Button>
        <Button color="inherit" component={Link} to="/settings">
          Settings
        </Button>
        <FormControlLabel
          control={<Switch checked={isDarkMode} onChange={toggleTheme} />}
          label="Dark Mode"
          style={{ color: 'white' }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
