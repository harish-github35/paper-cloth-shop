import { FirebaseError } from "firebase/app";
import { ChangeEvent, useState } from "react";
import {
  createNewUserWithEmailPassword,
  createUserDocWithFromAuth,
} from "../../utils/firebase";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import { Sign_up_container } from "./styles";

const defaultValues = {
  displayName: "",
  email: "",
  password: "",
};
const Signup = () => {
  const [inputs, setInputs] = useState(defaultValues);
  const [error, setError] = useState<string | null>(null);

  const { displayName, email, password } = inputs;

  const resetForm = () => {
    setInputs(defaultValues);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async () => {
    if (email && password) {
      try {
        const { user } = await createNewUserWithEmailPassword(email, password);
        await createUserDocWithFromAuth(user, { displayName });
        resetForm();
      } catch (e) {
        if (e instanceof FirebaseError) {
          setError(e.code.slice(4));
        }
        if (e instanceof Error) {
          setError(e.message);
        }
      }
    }
  };

  return (
    <Sign_up_container>
      <h2>Create Account</h2>
      <span>Sign up with your email and password</span>
      {error && <p>{error}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <FormInput
          label="Display Name"
          onChange={handleChange}
          value={displayName}
          type="text"
          name="displayName"
        />

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
        <Button options={{ type: "submit" }}>Sign Up</Button>
      </form>
    </Sign_up_container>
  );
};

export default Signup;
