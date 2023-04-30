import { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";

const useCategoiresContext = () => {
  return useContext(CategoriesContext);
};

export default useCategoiresContext;
