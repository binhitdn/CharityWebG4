import Navbar from "./navbar";
import Footer from "./footer";

import Meta from "./meta";
import Sidebar from "./Sidebar";
import React from "react";
export const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Meta />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar show={showSidebar} setter={setShowSidebar} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
