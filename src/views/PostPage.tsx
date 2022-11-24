import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from "@mui/material";
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { motion } from "framer-motion";

import { State } from "../state";
import { PostState } from "../state/actions";
import { postVariants } from "../assets/animations/variants";

const PostPage = () => {
    let { id } = useParams();

    const posts: PostState = useSelector((state: State) => state.data);
    const thisPost = posts.find(post => post.id === Number(id));

    return (
        <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5 }}>
            <Card
                sx={{ maxWidth: 345 }}
                component={motion.div}
                variants={postVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            J
                        </Avatar>
                    }
                    title={thisPost?.title}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={`https://source.unsplash.com/600x750/?nature,clouds`}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {thisPost?.body}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Container>
    )
}

export default PostPage