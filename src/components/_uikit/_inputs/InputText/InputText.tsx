import { FC, forwardRef, HTMLAttributes } from "react";
import { FieldError } from "react-hook-form/dist/types";

import Wrap from "@src/components/_uikit/_inputs/_elements/Wrap/Wrap";

import styles from "./InputText.module.scss";

interface IProps {
  label?: string;
  className?: string;
  isPassword?: boolean;
  error?: FieldError | Error;
}

type IInputProps = IProps & HTMLAttributes<HTMLInputElement>;
export type Ref = HTMLInputElement;

const InputText: FC<IInputProps> = forwardRef<Ref, IInputProps>(
  ({ label, className, isPassword, error, ...props }, ref) => {
    return (
      <Wrap label={label} className={className}>
        <input
          type={isPassword ? "password" : "text"}
          className={styles.input}
          ref={ref}
          {...props}
        />
        {error && <div className={styles.error}>{error.message}</div>}
      </Wrap>
    );
  },
);
InputText.displayName = "InputText";

export default InputText;
