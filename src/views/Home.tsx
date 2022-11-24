import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";

import { State } from "../state";
import { PostState } from "../state/actions";
import {
  Post,
  PostModal,
  NewFormPopup,
  Snackbar,
  EditPopup,
  AlertSuccess,
} from "../components"
import { IProps } from "../utils/interfaces";
import { homeVariants } from "../assets/animations/variants";

const Home: React.FC<IProps> = ({ open, setOpen }) => {
  let navigate = useNavigate();

  const posts: PostState = useSelector((state: State) => state.data);

  return (
    <motion.div variants={homeVariants} initial="hidden" animate="visible" exit="exit">
      <Container maxWidth="md">
        <NewFormPopup open={open} setOpen={setOpen} />
        <EditPopup open={open} setOpen={setOpen} />
        <Box
          sx={{ m: 3 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Stack spacing={2}>
            <Typography component="h1" variant="h2" fontWeight="bold">
              POSTS
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                setOpen({ ...open, form: !open.form });
                if (open.alert) {
                  setOpen({ ...open, alert: false });
                }
              }}
              component={motion.button}
              whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
              whileTap={{ scale: 0.95 }}
            >
              {open.form ? "Close Form" : "New Post"}
            </Button>
          </Stack>
        </Box>
        <AlertSuccess open={open} setOpen={setOpen} />
        <PostModal open={open} setOpen={setOpen} />
        <Box sx={{ mb: 3 }}>
          <Grid container spacing={4}>
            {posts.map((post) => (
              <Grid 
              item 
              md={6} 
              xs={12} 
              key={post.id} 
              onClick={() => navigate(`/post/${post.id}`)}
              >
                <Post post={post} open={open} setOpen={setOpen} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Snackbar open={open} setOpen={setOpen} />
    </motion.div>
  );
};

export default Home;
