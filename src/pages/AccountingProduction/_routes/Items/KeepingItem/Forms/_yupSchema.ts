// import * as yup from "yup";
import { object, number, string } from "yup";

const required = "Поле обязательно для заполнения";
const isNumber = "Значение должно быть числом";
const schema = object({
  detailAmount: number().required(required).typeError(isNumber),
  keepingBox: number().typeError(required).required(required),
  keepingBoxAmount: number().required(required).typeError(isNumber),
  title: string().required("Required field."),
}).required();

export default schema;
