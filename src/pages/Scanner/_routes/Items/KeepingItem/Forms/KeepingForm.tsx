import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@src/components/_uikit/Button/Button";
import { InputText } from "@src/components/_uikit/_inputs";
import schema from "@src/pages/Scanner/_routes/Items/KeepingItem/Forms/yupSchema";
import { IKeeping } from "@src/types/keeping";

import styles from "./KeepingForm.module.scss";

interface IProps {
  data: IKeeping;
  handle: (data: IKeeping) => void;
}

const KeepingForm: FC<IProps> = ({ data, handle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: data,
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IKeeping> = (formData) => {
    handle(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>{data.detail.name}</div>
      <InputText
        label="Количество"
        className={styles.input}
        {...register("detailAmount", {
          valueAsNumber: true,
        })}
        error={errors.detailAmount?.message}
      />
      <Button text="Сохранить" role="submit" />
    </form>
  );
};

export default KeepingForm;
