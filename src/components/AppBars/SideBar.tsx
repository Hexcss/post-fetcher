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
import { IProps } from "../../utils/interfaces";

const SideBar: React.FC<IProps> = ({ open, setOpen }) => {

  const handleClick = () => {
    setOpen({ ...open, formPopup: true })
  }

  const handleClickAway = (): void => {
    if (open.sidebar) {
      setOpen({ ...open, sidebar: false });
    }
  };

  return (
    <Drawer anchor="left" open={open.sidebar}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box>
          <Stack sx={{ mx: 3 }} direction="row">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen({ ...open, sidebar: !open.sidebar })}
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
              onClick={handleClick}
              sx={{ alignSelf: "center" }}
            >
              New Post
            </Button>
            <Button
              color="primary"
              onClick={handleClick}
              sx={{ alignSelf: "center" }}
            >
              New Post
            </Button>
            <Button
              color="primary"
              onClick={handleClick}
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
