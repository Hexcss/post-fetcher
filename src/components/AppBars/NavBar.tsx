import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import { actionCreators, State } from "../../state";

interface IProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<IProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const { openPopup } = bindActionCreators(
    actionCreators,
    dispatch
  );

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
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Post Fetcher
          </Typography>
          <Button color="inherit" onClick={() => openPopup(true)}>
            New Post
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default NavBar;
