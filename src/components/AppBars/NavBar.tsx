import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const NavBar: React.FC = () => {

  const isSideBarOpen = useSelector((state: State) => state.isSidebarOpen);
  const dispatch = useDispatch();
  const { openPopup, openSidebar } = bindActionCreators(actionCreators, dispatch);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => openSidebar(!isSideBarOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Post Fetcher
          </Typography>
          <Button color="inherit" onClick={() => openPopup(true)}>New Post</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  )
}

export default NavBar;