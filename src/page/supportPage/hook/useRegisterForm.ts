import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../registerSchema";
import type FormSupport from "../components/Form";



const defaultValues: FormSupport = {
  firstName: "",
  lastName:"",
  email: "",
  phone: "",
  message:"",
  agreeOfPrivacy: false
};

export const useRegisterForm = () => {
  const form = useForm<FormSupport>({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(registerSchema),
  });

  return {
    ...form,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
  };
};
