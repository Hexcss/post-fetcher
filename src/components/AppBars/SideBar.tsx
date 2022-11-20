import { useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";

import {
  Typography,
  IconButton,
  Drawer,
  Stack,
  Divider,
  Button,
  ClickAwayListener,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface IProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<IProps> = ({ isSidebarOpen, setIsSidebarOpen}) => {
  const dispatch = useDispatch();
  const { openPopup } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleClickAway = (): void => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <Drawer anchor="left" open={isSidebarOpen}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box>
          <Stack sx={{ mx: 3 }} direction="row">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <CloseIcon />
            </IconButton>
            <Typography
              component="h2"
              variant="h5"
              fontWeight="bold"
              sx={{ p: 1 }}
            >
              POSTS
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Divider sx={{ borderBottomWidth: 3 }} light={false} />
            <Button
              color="primary"
              onClick={() => openPopup(true)}
              sx={{ alignSelf: "center" }}
            >
              New Post
            </Button>
            <Button
              color="primary"
              onClick={() => openPopup(true)}
              sx={{ alignSelf: "center" }}
            >
              New Post
            </Button>
            <Button
              color="primary"
              onClick={() => openPopup(true)}
              sx={{ alignSelf: "center" }}
            >
              New Post
            </Button>
          </Stack>
        </Box>
      </ClickAwayListener>
    </Drawer>
  );
};

export default SideBar;
