import Signin from "../../components/sign-in/Signin";
import Signup from "../../components/signup/signup";
import { Auth_container } from "./styles";

const AuthPage = () => {
  return (
    <Auth_container>
      <Signin />
      <Signup />
    </Auth_container>
  );
};

export default AuthPage;
