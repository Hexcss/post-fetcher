import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import Drawer from "@mui/material/Drawer";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const SideBar: React.FC = () => {

  const isSideBarOpen = useSelector((state: State) => state.isSidebarOpen);
  const dispatch = useDispatch();
  const { openSidebar, openPopup } = bindActionCreators(actionCreators, dispatch);

  return (
    <React.Fragment>
      <Drawer anchor="left" open={isSideBarOpen}>
        <Stack sx={{ mx: 3 }} direction="row">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => openSidebar(!isSideBarOpen)}
        >
          <CloseIcon />
        </IconButton>
        <Typography component="h2" variant="h5" fontWeight="bold" sx={{ p: 1 }}>
          POSTS
        </Typography>
        </Stack>
        <Divider color="#fff" sx={{ borderBottomWidth: 2 }}/>
        <Button color="primary" onClick={() => openPopup(true)}>New Post</Button>
      </Drawer>
    </React.Fragment>
  );
};

export default SideBar;
