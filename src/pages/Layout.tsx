import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<p>loading..</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
