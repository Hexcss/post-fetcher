import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";

import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const SnackBar: React.FC = () => {
  const isSnackBarOpen = useSelector((state: State) => state.isSnackBarOpen);
  const dispatch = useDispatch();
  const { deleteLastPost, openSnackbar } = bindActionCreators(actionCreators, dispatch);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    openSnackbar(false);
  };

  const handleUndo = () => {
    deleteLastPost();
    openSnackbar(false);
  }

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
        open={isSnackBarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message="New Post Added"
        action={action}
      />
    </div>
  );
};

export default SnackBar;
