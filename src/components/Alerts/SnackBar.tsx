import * as React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { actionCreators } from "../../state";
import { IProps } from "../../utils/interfaces";

const SnackBar: React.FC<IProps> = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const { deleteLastPost } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({...open, snackbar: !open.snackbar});
  };

  const handleUndo = () => {
    deleteLastPost();
    setOpen({...open, snackbar: !open.snackbar});
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleUndo}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open.snackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        message="New Post Added"
        action={action}
      />
    </div>
  );
};

export default SnackBar;
