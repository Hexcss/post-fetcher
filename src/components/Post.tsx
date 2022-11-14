import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';

import { IPost } from "../state/actions";
import { EditPopup } from "./";

interface IProps {
  post: IPost;
}

const Post: React.FC<IProps> = ({ post }) => {
  const dispatch = useDispatch();
  const { deletePost, openEditPopup, fetchPostToEdit } = bindActionCreators(actionCreators, dispatch);
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
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
            startIcon={<DeleteIcon />}
            size="small"
            onClick={() => deletePost(post.id ? post.id : 0)}
          >
            Delete
          </Button>
          <IconButton
            aria-label="delete"
            onClick={() => {
              openEditPopup(true)
              fetchPostToEdit(post.id ? post.id : 0)
            }}
          >
            <Fab color="primary" aria-label="edit" size="small">
              <EditIcon />
            </Fab>
          </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
