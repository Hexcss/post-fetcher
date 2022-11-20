import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { motion } from "framer-motion";
import { Box, TextField, Button, Stack, Collapse } from "@mui/material";

import { IPost } from "../../state/actions";
//import AlertSuccess from "../Alerts/AlertSuccess";

interface IProps {
  isFormOpen: boolean;
  isAlertOpen: boolean;
  setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostModal: React.FC<IProps> = ({
  isFormOpen,
  isAlertOpen,
  setIsAlertOpen,
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
    if (isAlertOpen) {
      setIsAlertOpen(false);
    }
  };

  return (
    <Collapse in={isFormOpen}>
      <Box
        sx={{ mb: 3 }}
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          addPost(newPostData);
          setIsAlertOpen(true);
          setNewPostData({
            title: "",
            body: "",
          });
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
