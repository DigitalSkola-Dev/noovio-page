/* eslint-disable @typescript-eslint/no-explicit-any */
import { ADMIN_HELP } from "@/constants/apiUrl";
import { clientPost } from "@/services/fetcher";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FormInputs } from "../types/homeTypes";

const useHomepage = () => {
  const form = useForm<FormInputs>();
  const { handleSubmit, reset } = form;

  const mutate = useMutation({
    mutationFn: (payload: FormInputs) =>
      clientPost<{ message: string }>(ADMIN_HELP, payload),
    onSuccess: (data) => {
      reset({
        name: "",
        phone: "62",
        email: "",
        subject: "",
        message: "",
      });
      toast.success(data.message ?? "Berhasil kirim pesan");
    },
    onError: (error: any) => {
      toast.error(error.message ?? "Gagal mengirim pesan");
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate.mutate(data);
  });

  return { form, isLoading: mutate.isPending, onSubmit };
};

export default useHomepage;
