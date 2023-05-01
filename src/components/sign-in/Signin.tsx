import { FirebaseError } from "firebase/app";
import { ChangeEvent, useState } from "react";
import {
  createUserDocWithFromAuth,
  signInUserWithEmailPassword,
  signInWithGooglePopup,
} from "../../utils/firebase";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import { Buttons_container, Sign_in_container } from "./styles";

const defaultValues = {
  email: "",
  password: "",
};
const Signin = () => {
  const [inputs, setInputs] = useState(defaultValues);
  const [error, setError] = useState<string | null>(null);

  const { email, password } = inputs;

  const resetForm = () => {
    setInputs(defaultValues);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const signinWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocWithFromAuth(user);
  };

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await signInUserWithEmailPassword(email, password);
        resetForm();
      } catch (e) {
        if (e instanceof FirebaseError) {
          setError(e.code.slice(5).replace("-", " "));
        }
        if (e instanceof Error) {
          setError(e.message);
        }
      }
    }
  };

  return (
    <Sign_in_container>
      <h2>Already have an Account</h2>
      <span>Sign in with your email and password</span>
      {error && <p>{error}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <FormInput
          label="Email"
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
        />

        <FormInput
          label="Password"
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
        />
        <Buttons_container>
          <Button options={{ type: "submit" }}>Sign In</Button>
          <Button
            options={{ type: "button" }}
            buttonType="google-sign-in"
            onClick={signinWithGoogle}
          >
            Google sign in
          </Button>
        </Buttons_container>
      </form>
    </Sign_in_container>
  );
};

export default Signin;
