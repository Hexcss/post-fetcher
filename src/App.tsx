import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Home, PostPage } from "./views";
import { actionCreators } from "./state";
import { IOpen } from "./utils/interfaces";
import { NavBar, SideBar } from "./components";

const App: React.FC = () => {
  const location = useLocation();

  const [open, setOpen] = useState<IOpen>({
    form: false,
    alert: false,
    sidebar: false,
    formPopup: false,
    edit: false,
    snackbar: false,
  });

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
      <NavBar open={open} setOpen={setOpen} />
      <SideBar open={open} setOpen={setOpen} />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home open={open} setOpen={setOpen} />}></Route>
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </AnimatePresence>
    </React.Fragment>
  )
}

export default App