import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import { setCategories, setisLoading } from "../redux/categoriesSlice";
import { useAppDispatch } from "../redux/useRedux";
import { setUser } from "../redux/userSlice";
import {
  getCategoriesAndDocuments,
  getCurrentUserDoc,
  onAuthStateChangedListener,
} from "../utils/firebase";

const Layout = () => {
  const dispatch = useAppDispatch();
  // get current user on app start
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        const userdata = await getCurrentUserDoc(user.uid);
        if (userdata) {
          dispatch(setUser({ ...user, ...userdata }));
        }
      } else {
        dispatch(setUser(null));
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    dispatch(setisLoading());
    const g = async () => {
      const categories = await getCategoriesAndDocuments();
      dispatch(setCategories(categories));
      console.log("set cates");
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
