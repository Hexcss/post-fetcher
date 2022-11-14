import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';

import { IPost } from "../state/actions";
import { AlertSuccess } from "./index";

const PostModal: React.FC = () => {
  const [newPostData, setNewPostData] = useState<IPost>({
    id: Math.round(Math.random() * 100),
    title: "",
    body: "",
  });

  const isFormOpen = useSelector((state: State) => state.isFormOpen);
  const isAlertOpen = useSelector((state: State) => state.isAlertOpen);
  const dispatch = useDispatch();
  const { addPost, openAlert } = bindActionCreators(actionCreators, dispatch);

  const handleChange = (key: string, value: string) => {
    setNewPostData((state) => ({ ...state, [key]: value }))
    if (isAlertOpen) {
      openAlert(false);
    }
  }

  return (
    <Collapse in={isFormOpen}>
      <Box sx={{ mb: 3 }} component="form" onSubmit={(e) => {
        e.preventDefault();
        addPost(newPostData)
        openAlert(true);
        setNewPostData({
          title: "",
          body: "",
        });
      }}>
        <AlertSuccess />
        <Stack direction="column" spacing={2}>
          <TextField required label="Post Title" variant="filled" fullWidth value={newPostData.title} name="title" onChange={(e) =>
            handleChange(e.target.name, e.target.value)
          } />
          <TextField required label="Post Body" variant="filled" fullWidth multiline minRows={3} maxRows={5} value={newPostData.body} name="body" onChange={(e) =>
            handleChange(e.target.name, e.target.value)
          } />
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </Stack>
      </Box>
    </Collapse>
  )
};

export default PostModal;
