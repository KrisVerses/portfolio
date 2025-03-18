import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2021 My Site</p>
      </footer>
    </div>
  );
};

export default Layout;
