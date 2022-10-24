import { async } from "@firebase/util";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {
  auth,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import InputForm from "../form/Input/InputForm";
import Button from "../form/Button/Button.component";
import styles from './SignUpForm.module.scss';
const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Can not create user, email already in use");
      } else {
        console.log("user creation encountered an error " + error);
      }
    }
  };
  return (
    <div className={styles['sign-up-container']}>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputForm
          label={"Name: "}
          type={"name"}
          required
          onChange={handleChange}
          name={"displayName"}
          value={displayName}
        />
        <InputForm
          label={"Email: "}
          type={"email"}
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <InputForm
          label={"Password: "}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <InputForm
          label={"Confirm Password:"}
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button buttonType='inverted' type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
