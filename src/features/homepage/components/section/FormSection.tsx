/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, InputPhoneNumber } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { Controller } from "react-hook-form";

interface Props {
  form: any;
  onSubmit: () => void;
}

const FormSection = ({ form, onSubmit }: Props) => {
  return (
    <section
      id="form"
      className="sm:pb-16 pb-10 sm:pt-28 pt-20 bg-gradient-to-b from-[#F3F7FF] to-[#BBF7FF] -mt-10 rounded-b-[25px] sm:rounded-b-[35px]"
    >
      <div className="container grid sm:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug text-transparent mb-4 bg-clip-text bg-gradient-to-br from-primary to-primary-accent">
            Diskusikan Kebutuhan Perusahaan Anda
          </h2>
          <p className="text-base sm:text-lg text-[#001D80] mb-6">
            Ada pertanyaan atau ingin tahu lebih banyak tentang solusi Noovio?
            Kami siap membantu perusahaan Anda mengelola informasi dengan
            repository pintar yang mudah dicari, diakses melalui chatbot, dan
            mendorong budaya knowledge sharing berkelanjutan.
          </p>
          <div className="space-y-2 mt-6">
            <div className="flex items-center gap-2.5">
              <Mail className="size-5 text-[#001D80]" />
              <span className="text-[#001D80] sm:text-lg text-base">
                Nia@noovio.co.id
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="size-5 text-[#001D80]" />
              <span className="text-[#001D80] sm:text-lg text-base">
                +6285640718857
              </span>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-3xl py-8 px-10">
          <h4 className="sm:text-2xl text-xl font-bold">
            Punya pertanyaan terkait AI Noovio?
          </h4>
          <p className="sm:text-base text-sm text-[#001D80] mt-2 mb-6">
            Isi data dirimu, dan tim kami akan segera menghubungimu.
          </p>

          <form onSubmit={onSubmit} className="space-y-4">
            <Controller
              name="name"
              control={form.control}
              rules={{ required: "Nama lengkap tidak boleh kosong" }}
              render={({ field, fieldState }) => (
                <Input
                  label="Nama Lengkap"
                  labelClassName="text-[#173A97]"
                  placeholder="Nama lengkap"
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="phone"
              control={form.control}
              rules={{ required: "Nomor WhatsApp tidak boleh kosong" }}
              render={({ field, fieldState }) => (
                <InputPhoneNumber
                  label="Nomor WhatsApp"
                  labelClassName="text-[#173A97]"
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={form.control}
              rules={{
                required: "Email tidak boleh kosong",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email tidak valid",
                },
              }}
              render={({ field, fieldState }) => (
                <Input
                  label="Email"
                  placeholder="Email"
                  labelClassName="text-[#173A97]"
                  type="email"
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="subject"
              control={form.control}
              rules={{ required: "Subjek tidak boleh kosong" }}
              render={({ field, fieldState }) => (
                <Input
                  label="Subjek"
                  placeholder="Topik subjek kamu"
                  labelClassName="text-[#173A97]"
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="message"
              control={form.control}
              rules={{ required: "Pesan tidak boleh kosong" }}
              render={({ field, fieldState }) => (
                <Textarea
                  label="Pesan"
                  placeholder="Tulis pesan yang ingin kamu sampaikan"
                  labelClassName="text-[#173A97]"
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Button className="w-full h-12 sm:!text-lg !mt-8 !text-base bg-gradient-to-r from-primary-accent to-primary hover:opacity-90">
              Kirim Pesan
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
