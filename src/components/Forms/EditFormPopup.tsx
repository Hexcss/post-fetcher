import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Stack,
} from "@mui/material";

import { IPost, PostState } from "../../state/actions";
import { IProps } from "../../utils/interfaces";

const EditPopup: React.FC<IProps> = ({ open, setOpen }) => {
  const postToEditID: number = useSelector(
    (state: State) => state.postToEditID
  );
  const posts: PostState = useSelector((state: State) => state.data);
  const postIndex: number = posts.findIndex((post) => post.id === postToEditID);
  const postToEdit: IPost = { ...posts[postIndex] };
  const dispatch = useDispatch();
  const { editPost } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [updatedPostData, setUpdatedPostData] = useState<IPost>({
    id: 0,
    title: "",
    body: "",
  });

  useEffect(() => {
    setUpdatedPostData({
      id: postToEditID,
      title: postToEdit.title,
      body: postToEdit.body,
    });
  }, [postToEditID]);

  const handleChange = (key: string, value: string) => {
    setUpdatedPostData((state) => ({ ...state, [key]: value }));
  };

  const handleClose = (): void => {
    setOpen({...open, edit: false});
  };

  return (
    <>
      <Dialog open={open.edit} onClose={handleClose} fullWidth>
        <DialogTitle>Edit Post</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 1 }}>
            Edit Post With Id: {postToEditID}
          </DialogContentText>
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
