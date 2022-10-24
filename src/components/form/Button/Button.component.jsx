import styles from "./Button.module.scss";
import classes from "classnames/bind";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, typeButton, buttonType, ...otherProps }) => {
  return (
    <button
      type={typeButton}
      {...otherProps}
      className={classes({
        [styles["button-container"]]: true,
        [styles[`${BUTTON_TYPE_CLASSES[buttonType]}`]]: true,
      })}
    >
      {children}
    </button>
  );
};
export default Button;
