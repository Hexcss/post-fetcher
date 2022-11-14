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

import { IPost, PostState } from "../state/actions";

const EditPopup: React.FC= () => {

  const isEditOpen: boolean = useSelector((state: State) => state.isEditOpen);
  const postToEditID: number = useSelector((state:State) => state.postToEditID);
  const posts: PostState = useSelector((state: State) => state.data);
  const postIndex: number = posts.findIndex(post => post.id === postToEditID);
  const postToEdit: IPost = {...posts[postIndex]};
  const dispatch = useDispatch();
  const { editPost, openEditPopup } = bindActionCreators(actionCreators, dispatch);

  const handleClose = (): void => {
    openEditPopup(false);
  };

  const [updatedPostData, setUpdatedPostData] = useState<IPost>({
    id: postToEditID,
    title: postToEdit.title,
    body: postToEdit.body,
  });

  const handleChange = (key: string, value: string) => {
    setUpdatedPostData((state) => ({ ...state, [key]: value }));
  };

  return (
    <>
      <Dialog open={isEditOpen} onClose={handleClose} fullWidth>
        <DialogTitle>Edit Post</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 1}}>Edit Post With Id: {postToEditID}</DialogContentText>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              editPost(postToEditID, updatedPostData);
              handleClose();
            }}
          >
            <Stack direction="column" spacing={2}>
              <TextField
                required
                label="Post Title"
                variant="filled"
                fullWidth
                value={updatedPostData.title}
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
                value={updatedPostData.body}
                name="body"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </Stack>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditPopup;
