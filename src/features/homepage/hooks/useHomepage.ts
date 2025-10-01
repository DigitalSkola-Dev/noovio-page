import { useForm } from "react-hook-form";
import { FormInputs } from "../types/homeTypes";

const useHomepage = () => {
  const form = useForm<FormInputs>();
  const { handleSubmit } = form;

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return { form, onSubmit };
};

export default useHomepage;
