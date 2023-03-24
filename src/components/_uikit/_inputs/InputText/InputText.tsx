import { FC, forwardRef, HTMLAttributes, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form/dist/types";

import cn from "classnames";

import Wrap from "@src/components/_uikit/_inputs/_elements/Wrap/Wrap";

import styles from "./InputText.module.scss";

interface IProps {
  label?: string;
  className?: string;
  isPassword?: boolean;
  error?: string;
}

type IInputProps = IProps & InputHTMLAttributes<HTMLInputElement>;

const InputText = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, className, isPassword, error, ...props }, ref) => {
    return (
      <Wrap label={label} className={className} error={error}>
        <input
          type={isPassword ? "password" : "text"}
          className={styles.input}
          ref={ref}
          {...props}
        />
      </Wrap>
    );
  },
);
InputText.displayName = "InputText";

export default InputText;