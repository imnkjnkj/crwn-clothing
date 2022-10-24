import styles from "./InputForm.module.scss";
import classNames from "classnames/bind";
const InputForm = ({
  label,
  handleChange,
  value,
  nameValue,
  typeInput,
  ...otherProps
}) => {
  return (
    <div className={styles.group}>
      {label && (
        <label
          className={classNames({
            [styles.shrink]: value.length,
            [styles["form-input-label"]]: true,
          })}
        >
          {label}
        </label>
      )}

      <input
        type={typeInput}
        className={styles["form-input"]}
        onChange={handleChange}
        name={nameValue}
        value={value}
        {...otherProps}
      />
    </div>
  );
};

export default InputForm;
