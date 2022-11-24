import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { motion } from "framer-motion";
import { Box, TextField, Button, Stack, Collapse } from "@mui/material";

import { IPost } from "../../state/actions";
import { IProps } from "../../utils/interfaces";

const PostModal: React.FC<IProps> = ({
  open,
  setOpen,
}) => {
  const [newPostData, setNewPostData] = useState<IPost>({
    id: Math.round(Math.random() * 100),
    title: "",
    body: "",
  });

  const dispatch = useDispatch();
  const { addPost } = bindActionCreators(actionCreators, dispatch);

  const handleChange = (key: string, value: string) => {
    setNewPostData((state) => ({ ...state, [key]: value }));
    if (open.alert) {
      setOpen({ ...open, alert: !open.alert });
    }
  };

  const handleSubmit = ():void => {
    addPost(newPostData);
    setOpen({ ...open, alert: true });
    setNewPostData({
      title: "",
      body: "",
    });
    
  }

  return (
    <Collapse in={open.form}>
      <Box
        sx={{ mb: 3 }}
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
          <Button
            type="submit"
            variant="contained"
            color="success"
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Collapse>
  );
};

export default PostModal;
