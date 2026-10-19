import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout() {
  const { pathname } = useLocation();

  // Start every new page at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a
        href="#content"
        className="skip-link"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("content")?.focus();
        }}
      >
        Skip to content
      </a>
      <Navbar />
      <div id="content" tabIndex={-1} style={{ outline: "none" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
