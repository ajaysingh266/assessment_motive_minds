import React from "react";
import "./HomeScreen/index.scss";
import { connect } from "react-redux";
import { getProducts } from "../store/reducers/productSlice";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import Page404 from "./Page404";
const Screen = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} element={<HomeScreen />} />
        <Route path={"*"} element={<Page404 />} />
      </Switch>
    </BrowserRouter>
  );
};

export default connect(null, { getProducts })(Screen);
