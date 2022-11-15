import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { alpha } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import s from './style.module.scss'


const pages = ['Registration', 'About', 'FAQ', 'Companies'];

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

  const [mobileOpen, setOpen] = useState(false);

  const handleMobileOpen = () => {
    setOpen(true);
  };

  const handleMobileClose = (e) => {
    setOpen(false);
    if(e.target.innerText === 'Registration'){
      window.scrollTo(0,0);
    }
    else if(e.target.innerText === 'About'){
      window.scrollTo(0,600);
    }
    else if(e.target.innerText === 'FAQ'){
      window.scrollTo(0,1750);
    }
  };

  const handleDesktopClose = (e) => {
    if(e.target.innerText === 'Registration'){
      window.scrollTo(0,0);
    }
    else if(e.target.innerText === 'About'){
      window.scrollTo(0,650);
    }
    else if(e.target.innerText === 'FAQ'){
      window.scrollTo(0,1250);
    }
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
                return(
                  <MenuItem sx = {{
                    color: 'white',
                    marginRight: index == pages.length - 1 ? 3 : 2
                  }} onClick = {handleDesktopClose} key = {index} className = {s.sections}>{page}
                  </MenuItem>
                )
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
        <ThemeProvider theme={theme}>
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
              onClick ={handleMobileOpen}
            >
            <MenuIcon />
            </IconButton>
            </ThemeProvider>
            <img src = "asset/nav_spaceship.png" className = {s.ship}/>
          </Box>
        </Container>
        </AppBar>
        <Dialog
          fullScreen
          open={mobileOpen}
          onClose={handleMobileClose}
          PaperProps = {{
            style: {
              backgroundColor: '#110F47'
            }
          }}
        >
          <Toolbar>
            <IconButton
                edge="start"
                color="primary"
                onClick={handleMobileClose}
                aria-label="close"
            >
            <CloseIcon/>
            </IconButton>
            <img src = "asset/nav_spaceship.png" className = {s.shipDialog}/>
          </Toolbar>
            {pages.map((page, index) => (<MenuItem onClick={handleMobileClose} sx = {{ color: 'white', ml: 'auto', mr: 'auto'  }} key={index}>{page}</MenuItem>))}
        </Dialog>
        </ThemeProvider>
      </>
    )
  }
}

export default Navbar;