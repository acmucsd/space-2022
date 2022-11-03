import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { alpha } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import s from './style.module.scss'


const pages = ['About', 'Registration', 'FAQ', 'Companies'];

const Navbar: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF'
      },
      secondary: {
        main: alpha('#161748',0.7)
      }
    }
  })
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  },[]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if(width > 768){
    return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar color="secondary" sx = {{boxShadow: 'none'}}>
          <Container maxWidth = "xl">
            <Box sx = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <img src = "asset/nav_spaceship.png" className = {s.ship}/>
            <Box sx = {{display: 'flex', flexDirection: 'row'}}>
              {pages.map((page, index) => {
                if(index == pages.length -1){
                  return(
                    <Typography sx = {{
                      color: 'white',
                      marginTop: 3,
                      marginRight: 6
                    }} key = {index} className = {s.sections}>{page}
                    </Typography>
                  )
                }
                else{
                  return(
                    <Typography sx = {{
                      color: 'white',
                      marginTop: 3,
                      marginRight: 4
                    }} key = {index} className = {s.sections}>{page}
                    </Typography>
                  )
                }
                })}
              </Box>
            </Box>
          </Container>
        </AppBar>
        </ThemeProvider>
    </>
    )
  }
  else{
    return(
      <>
        <AppBar color="transparent" sx = {{boxShadow: 'none'}}>
        <Container maxWidth = "xl">
          <Box sx = {{ display: 'flex', flexDirection: 'row'}}>
            <ThemeProvider theme={theme}>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick ={handleClick}
            >
            <MenuIcon />
            </IconButton>
            </ThemeProvider>
            <img src = "asset/nav_spaceship.png" className = {s.ship}/>
          </Box>
        </Container>
        </AppBar>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        >
          {pages.map((page, index) => (<MenuItem onClick={handleClose} key={index}>{page}</MenuItem>))}
        </Menu>
      </>
    )
  }
}

export default Navbar;