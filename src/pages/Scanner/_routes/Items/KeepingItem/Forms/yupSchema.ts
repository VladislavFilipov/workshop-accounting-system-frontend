import * as yup from "yup";

const schema = yup
  .object({
    detailAmount: yup.number().required(),
    // title: yup.string().required("Required field."),
  })
  .required();

export default schema;
