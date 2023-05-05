import { Navigate } from "react-router-dom";
import Signin from "../../components/sign-in/Signin";
import Signup from "../../components/signup/signup";
import { useAppSelector } from "../../redux/useRedux";
import { Auth_container } from "./styles";

const AuthPage = () => {
  const currentUser = useAppSelector((s) => s.user.currentUser);

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <Auth_container>
      <Signin />
      <Signup />
    </Auth_container>
  );
};

export default AuthPage;
