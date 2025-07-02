import * as yup from "yup";
export const login_schema = yup
  .object({
    username: yup.string().required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  })
  .required();
