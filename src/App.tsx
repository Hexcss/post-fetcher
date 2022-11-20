import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Stack,
  ClickAwayListener,
} from "@mui/material";

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
  AlertSuccess,
} from "./components";

const App: React.FC = () => {
  const posts: PostState = useSelector((state: State) => state.data);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { fetchData } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <NavBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
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
                setIsFormOpen(!isFormOpen);
                if (isAlertOpen) {
                  setIsAlertOpen(false);
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
        <AlertSuccess isAlertOpen={isAlertOpen} setIsAlertOpen={setIsAlertOpen} />
        <PostModal isFormOpen={isFormOpen} isAlertOpen={isAlertOpen} setIsAlertOpen={setIsAlertOpen} />
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
