import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import InputForm from "../form/Input/InputForm";
import Button from "../form/Button/Button.component";
import styles from "./SignInForm.module.scss";
const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(res);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect passwoprd for email");
          break;
        case "auth/user-not-found":
          alert("Email do not exists");
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <div className={styles["sign-up-container"]}>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className={styles["buttons-container"]}>
          <Button buttonType="inverted" typeButton="submit">
            Sign In
          </Button>
          <Button onClick={signInWithGoogle} typeButton='button' buttonType="google">
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
