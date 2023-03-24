import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames";

import Button from "@src/components/_uikit/Button/Button";
import { InputText } from "@src/components/_uikit/_inputs";
import inputStyles from "@src/components/_uikit/_inputs/InputText/InputText.module.scss";
import Select from "@src/components/_uikit/_inputs/Select/Select";
import Wrap from "@src/components/_uikit/_inputs/_elements/Wrap/Wrap";
import { keepingTypesNormalized } from "@src/data/keepingTypes";
import schema from "@src/pages/Scanner/_routes/Items/KeepingItem/Forms/_yupSchema";
import { IKeeping } from "@src/types/keeping";

import styles from "./KeepingForm.module.scss";

interface IProps {
  data: IKeeping;
  handle: (data: IKeeping) => void;
  handleDelete?: (data: IKeeping) => void;
}

const KeepingForm: FC<IProps> = ({ data, handle, handleDelete }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: data,
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IKeeping> = (formData) => {
    handle(formData);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.body}>
        <Wrap label="Деталь">
          <div className={cn(inputStyles.input, styles.detail)}>
            {data.detail.name}
          </div>
        </Wrap>

        <InputText
          label="Количество шт."
          className={styles.input}
          {...register("detailAmount", {
            valueAsNumber: true,
          })}
          error={errors.detailAmount?.message}
        />
        <Select
          label="Упаковка"
          options={keepingTypesNormalized}
          {...register("keepingBox")}
          error={errors.keepingBox?.message}
        />
        {/* <div>
          <div>Упаковка</div>
          <select {...register("keepingBox")}>
            {keepingTypesNormalized.map((keeping) => (
              <option value={keeping.value}>{keeping.label}</option>
            ))}
          </select>
        </div> */}
        <InputText
          label="Количество упак."
          className={styles.input}
          {...register("keepingBoxAmount", {
            valueAsNumber: true,
          })}
          error={errors.keepingBoxAmount?.message}
        />
      </div>
      <div className={styles.btns}>
        {handleDelete ? (
          <Button
            text="Удалить"
            type="danger"
            onClick={() => handleDelete(data)}
          />
        ) : (
          <Button text="Добавить" role="submit" type="confirm" />
        )}
      </div>
    </form>
  );
};

export default KeepingForm;
