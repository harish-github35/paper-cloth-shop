import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const useAuthContext = () => {
  return useContext(UserContext);
};

export default useAuthContext;
