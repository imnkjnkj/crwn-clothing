
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";
import styles from "./Authentication.module.scss";
const Authentication = () => {


  return (
    <div className={styles["authentication-container"]}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
