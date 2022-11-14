import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { IPost } from "../state/actions";

const FormPopup: React.FC = () => {
  const isPopupOpen: boolean = useSelector((state: State) => state.isPopupOpen);
  const dispatch = useDispatch();
  const { addPost, openPopup, openSnackbar } = bindActionCreators(actionCreators, dispatch);

  const handleClose = (): void => {
    openPopup(false);
  };

  const [newPostData, setNewPostData] = useState<IPost>({
    id: Math.round(Math.random() * 100),
    title: "",
    body: "",
  });

  const handleChange = (key: string, value: string) => {
    setNewPostData((state) => ({ ...state, [key]: value }));
  };

  return (
    <div>
      <Dialog open={isPopupOpen} onClose={handleClose} fullWidth>
        <DialogTitle>Add New Post</DialogTitle>
        <DialogContent>
          <DialogContentText>Create A New Post</DialogContentText>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              addPost(newPostData);
              openSnackbar(true);
              setNewPostData({
                title: "",
                body: "",
              });
              handleClose();
            }}
          >
            <Stack direction="column" spacing={2}>
              <TextField
                required
                label="Post Title"
                variant="filled"
                fullWidth
                value={newPostData.title}
                name="title"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <TextField
                required
                label="Post Body"
                variant="filled"
                fullWidth
                multiline
                minRows={3}
                maxRows={5}
                value={newPostData.body}
                name="body"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </Stack>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Add</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormPopup;
