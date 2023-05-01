import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import { Suspense, useEffect } from "react";
import {
  getCategoriesAndDocuments,
  onAuthStateChangedListener,
} from "../utils/firebase";
import { useAppDispatch } from "../redux/useRedux";
import { setUser } from "../redux/userSlice";
import { setCategories, setisLoading } from "../redux/categoriesSlice";

const Layout = () => {
  const dispatch = useAppDispatch();

  // get current user on app start
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      dispatch(setUser(user));
    });

    return () => unsubscribe();
  }, []);

  // get all categories and products on app start
  useEffect(() => {
    dispatch(setisLoading());
    const g = async () => {
      const categories = await getCategoriesAndDocuments();
      dispatch(setCategories(categories));

      dispatch(setisLoading());
    };
    g();
  }, []);

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
