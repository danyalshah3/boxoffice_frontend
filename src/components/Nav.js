import {NavLink} from 'react-router-dom'
import {connect} from "react-redux"
import { Logout } from '../redux/actionCreators'

import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

function  Nav({Logout}) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
            //   checked={auth}
            //   onChange={handleChange}
            //  aria-label="login switch"
            />
          }
          label="home"
        />
      </FormGroup>
      <AppBar style={{ background: '#b8860b' }}>
        <Toolbar>
          <IconButton
            // size="smalll"
            // edge="start"
            // color="primary"
            // aria-label="menu"
            // sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button className="button" className="glow-on-hover" ><NavLink to={"/home"}><h3>Home</h3></NavLink></Button>
          </Typography>
          {auth && (
            <div>
              <IconButton  style={{ background: '#F5BD02' }}
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                
              >
                <AccountCircle />
              </IconButton>
              <Menu  
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Button className="glow-on-hover" variant="contained" color="success" size="small"><NavLink  to={`/movies`}><h5>See All Movies</h5></NavLink></Button></MenuItem>
                {/* <MenuItem onClick={handleClose}></MenuItem> */}
                <MenuItem onClick={handleClose}><Button className="glow-on-hover" variant="contained" color="success" size="small"><NavLink to={"/transations"}><h5>Rentals</h5></NavLink></Button></MenuItem>
                <MenuItem onClick={handleClose}><Button variant="contained" color="error"  size="small" onClick={Logout}><h5>Logout</h5></Button> </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default connect(null, {Logout})(Nav)

