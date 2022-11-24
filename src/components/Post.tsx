import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  IconButton,
  Typography,
  Fab,
  Box
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { motion } from "framer-motion";

import { IPost } from "../state/actions";
import { actionCreators } from "../state";
import { IOpen } from "../utils/interfaces";

interface IProps {
  post: IPost;
  open: IOpen;
  setOpen: React.Dispatch<React.SetStateAction<IOpen>>;
}

const Post: React.FC<IProps> = ({ post, open, setOpen }) => {
  const dispatch = useDispatch();
  const { deletePost, fetchPostToEdit } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const [cardElevation, setCardElevation] = useState<number>(1);
  return (
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        onMouseEnter={() => setCardElevation(4)}
        onMouseLeave={() => setCardElevation(1)}
        elevation={cardElevation}
        component={motion.div}
        whileHover={{ scale: 1.05, cursor: "pointer", transition: { type: "spring", stiffness: 300 } }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Id: {post.id}
          </Typography>
          <Typography variant="h6" component="div">
            {post.title}
          </Typography>
          <Typography
            sx={{
              overflow: "hidden",
              maxWidth: "75ch",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            variant="body2"
          >
            {post.body}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            color="error"
            variant="outlined"
            startIcon={<Delete />}
            size="small"
            onClick={() => deletePost(post.id ? post.id : 0)}
          >
            Delete
          </Button>
          <IconButton
            aria-label="delete"
            onClick={() => {
              setOpen({ ...open, edit: true });
              fetchPostToEdit(post.id ? post.id : 0);
            }}
          >
            <Fab color="primary" aria-label="edit" size="small">
              <Edit />
            </Fab>
          </IconButton>
        </CardActions>
      </Card>
  );
};

export default Post;
