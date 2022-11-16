import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import { Container, Grid, Typography, Box, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

import { actionCreators, State } from "./state";
import { PostState } from "./state/actions";
import {
  Post,
  PostModal,
  NavBar,
  SideBar,
  NewFormPopup,
  Snackbar,
  EditPopup,
} from "./components";

const App: React.FC = () => {

  const posts: PostState = useSelector((state: State) => state.data);
  const isFormOpen = useSelector((state: State) => state.isFormOpen);
  const isAlertOpen = useSelector((state: State) => state.isAlertOpen);
  const isPopupOpen = useSelector((state: State) => state.isPopupOpen);
  const dispatch = useDispatch();
  const { fetchData, openForm, openAlert } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <SideBar />
      <Container maxWidth="md">
        <NewFormPopup />
        <EditPopup />
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
                openForm(!isFormOpen);
                if (isAlertOpen) {
                  openAlert(false);
                }
              }}
              component={motion.button}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
            >
              {isFormOpen ? "Close Form" : "New Post"}
            </Button>
          </Stack>
        </Box>
        <PostModal />
        <Box sx={{ mb: 3 }}>
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid item md={6} xs={12} key={post.id}>
                <Post post={post} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Snackbar />
    </React.Fragment>
  );
};

export default App;
