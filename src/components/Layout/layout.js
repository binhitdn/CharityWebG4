import Navbar from "./navbar";
import Footer from "./footer";

import Meta from "./meta";
import Sidebar from "./Sidebar";
import React from "react";
import GoToTop from "../GoToTop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        draggable={true}
        pauseOnHover={true}
      />
    </div>
  );
};
export default Layout;
