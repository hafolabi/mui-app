import React  from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from "@mui/material";
import { AccountBox, Article, Group, Home, Person, Settings, Storefront, ModeNight, LightMode } from "@mui/icons-material";

const Sidebar = ({mode, setMode}) => {
  // const [checked, setChecked] = useState(false);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  // const changeMode = ()=> {
  //   setMode((mode === 'light') ? 'dark' : 'light')
  // }
  
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
    <Box position='fixed'>
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon sx={{cursor:'pointer', marginLeft:'50px', marginTop:'10px'}}>
                {(mode==='light') ? 
                <ModeNight onClick={e=>setMode("dark")} /> :
                <LightMode onClick={e=>setMode("light")} />
                } 
              </ListItemIcon>

              {/* <Switch onChange={e=>setMode((mode === 'light') ? 'dark' : 'light')} /> */}
              {/* <Switch
                checked={checked}
                onChange={(e) =>{handleChange(e); changeMode(e); } }
                inputProps={{ 'aria-label': 'primary checkbox' }}
              /> */}
             
            </ListItemButton>
          </ListItem>
          </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
