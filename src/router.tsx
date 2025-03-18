import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";

const Home = () => {
  return <div>Home</div>;
};

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />}>
      <Route index element={Home()} />
    </Route>,
  ])
);

export default router;
