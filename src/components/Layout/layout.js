import Navbar from "./navbar";
import Footer from "./footer";

import Meta from "./meta";
import Sidebar from "./Sidebar";
import React from "react";
import GoToTop from "../GoToTop";
export const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="overflow-x-hidden relative">
      <Meta />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar show={showSidebar} setter={setShowSidebar} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
      <GoToTop />
    </div>
  );
};
export default Layout;
