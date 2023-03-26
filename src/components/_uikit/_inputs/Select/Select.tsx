/*
  Uncontrolled select component
*/
import { forwardRef, SelectHTMLAttributes } from "react";

import Wrap from "@src/components/_uikit/_inputs/_elements/Wrap/Wrap";
import { INormalized } from "@src/types/normalized";

import styles from "./Select.module.scss";

interface IProps {
  options: INormalized[];
  label?: string;
  className?: string;
  error?: string;
}

type IInputProps = IProps & SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef<HTMLSelectElement, IInputProps>(
  ({ options, label, className, error, ...props }, ref) => {
    return (
      <Wrap label={label} className={className} error={error}>
        <select className={styles.input} ref={ref} {...props}>
          {options.map((option) => (
            <option key={option.value} value={String(option.value)}>
              {option.label}
            </option>
          ))}
        </select>
      </Wrap>
    );
  },
);
Select.displayName = "Select";

export default Select;
