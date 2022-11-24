import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { motion } from "framer-motion";
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

import { IPost } from "../../state/actions";
import { actionCreators } from "../../state";
import { flip } from "../../assets/animations";
import { IProps } from "../../utils/interfaces";

const NewFormPopup: React.FC<IProps> = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const { addPost } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleClose = (): void => {
    setOpen({ ...open, formPopup: false });
  };

  const [newPostData, setNewPostData] = useState<IPost>({
    id: Math.round(Math.random() * 100),
    title: "",
    body: "",
  });

  const handleChange = (key: string, value: string): void => {
    setNewPostData((state) => ({ ...state, [key]: value }));
  };

  const handleSubmit = () => {
    addPost(newPostData);
    setNewPostData({
      title: "",
      body: "",
    });
    setOpen({...open, snackbar: true, formPopup: false});
  }

  return (
    <Dialog open={open.formPopup} onClose={handleClose} fullWidth>
      <motion.div
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <DialogTitle>Add New Post</DialogTitle>
        <DialogContent>
          <DialogContentText>Create A New Post</DialogContentText>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
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
      </motion.div>
    </Dialog>
  );
};

export default NewFormPopup;
