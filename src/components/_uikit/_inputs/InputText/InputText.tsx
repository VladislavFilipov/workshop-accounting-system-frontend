/*
  Uncontrolled input component
*/
import { forwardRef, InputHTMLAttributes } from "react";

import Wrap from "@src/components/_uikit/_inputs/_elements/Wrap/Wrap";

import styles from "./InputText.module.scss";

interface IProps {
  label?: string;
  className?: string;
  isPassword?: boolean;
  error?: string;
  isTextarea?: boolean;
}

type IInputProps = IProps & InputHTMLAttributes<HTMLInputElement>;

const InputText = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      label = "Введите текст",
      className,
      isPassword,
      error,
      isTextarea = false,
      ...props
    },
    ref,
  ) => {
    return (
      <Wrap label={label} className={className} error={error}>
        <input
          type={isPassword ? "password" : "text"}
          className={styles.input}
          ref={ref}
          {...props}
          placeholder={label}
        />
      </Wrap>
    );
  },
);
InputText.displayName = "InputText";

export default InputText;
