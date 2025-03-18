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

const About = () => {
  return <div>About</div>;
};

const Contact = () => {
  return <div>Contact</div>;
};

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />}>
      <Route index element={Home()} />
      <Route path="/about" element={About()} />
      <Route path="/contact" element={Contact()} />
    </Route>,
  ])
);

export default router;
