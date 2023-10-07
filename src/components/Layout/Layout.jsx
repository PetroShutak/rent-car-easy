import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
// import Loader from "../Loader/Loader";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
