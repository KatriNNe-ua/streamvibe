import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required("First Name is required")
    .min(2, "Minimum 2 characters")
    .max(30, "Maximum 30 characters"),
  lastName: yup
    .string()
    .trim()
    .required("Last Name is required")
    .min(2, "Minimum 2 characters")
    .max(30, "Maximum 30 characters"),
  phone: yup
    .string()
    .nullable()
    .required("Phone number is required")
    .matches(/^(\+?\d{10,15})?$/, "Incorrect phone number"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  message: yup
    .string()
    .trim()
    .required("Message is required")
    .min(10, "Minimum 10 characters"),
  agreeOfPrivacy: yup
    .boolean()
    // .default(false)
    .oneOf([true], "You must agree to the privacy policy")
    .required(),
});
