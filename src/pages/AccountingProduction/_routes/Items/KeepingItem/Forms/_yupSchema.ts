import * as yup from "yup";

const required = "Поле обязательно для заполнения";
const isNumber = "Значение должно быть числом";
const schema = yup
  .object({
    detailAmount: yup.number().required(required).typeError(isNumber),
    keepingBox: yup.number().typeError(required).required(required),
    keepingBoxAmount: yup.number().required(required).typeError(isNumber),
    // title: yup.string().required("Required field."),
  })
  .required();

export default schema;
