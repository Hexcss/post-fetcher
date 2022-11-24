import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import { IProps } from "../../utils/interfaces";

const NavBar: React.FC<IProps> = ({ open, setOpen }) => {
  let navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    if (pathname === "/") {
      setOpen({ ...open, formPopup: true })
    } else {
      navigate("/");
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" component={motion.div} initial={{ y: -250 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: "tween", duration: 0.7 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen({...open, sidebar: true})}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Post Fetcher
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            {pathname === "/" ? "New Post" : "Home"}
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default NavBar;
