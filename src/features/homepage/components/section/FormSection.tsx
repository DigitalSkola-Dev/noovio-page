/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, InputPhoneNumber } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Button } from "@/components/ui/button";
import { motion as m } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { memo } from "react";
import { Controller } from "react-hook-form";

interface Props {
  form: any;
  isLoading: boolean;
  onSubmit: () => void;
}

const FormSection = ({ form, isLoading, onSubmit }: Props) => {
  return (
    <section
      id="contact"
      className="sm:pb-16 pb-10 sm:pt-28 pt-20 bg-gradient-to-b from-[#F3F7FF] to-[#BBF7FF] -mt-10 rounded-b-[25px] sm:rounded-b-[35px]"
    >
      <div className="container flex sm:flex-row flex-col xl:gap-20 lg:gap-12 sm:gap-6 gap-10">
        <div className="flex flex-col justify-start xl:w-[40%] lg:w-[45%] sm:w-[46%] w-full">
          <div className="overflow-hidden  mb-6">
            <m.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl sm:text-start text-center font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-accent"
            >
              Diskusikan Kebutuhan Perusahaan Anda
            </m.h2>
          </div>
          <div className="overflow-hidden">
            <m.p
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base lg:text-lg text-[#001D80] sm:mb-6 mb-4 sm:text-start text-center"
            >
              Ada pertanyaan atau ingin tahu lebih banyak tentang solusi Noovio?
              Kami siap membantu perusahaan Anda mengelola informasi dengan
              repository pintar yang mudah dicari, diakses melalui chatbot, dan
              mendorong budaya knowledge sharing berkelanjutan.
            </m.p>
          </div>
          <m.div
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-2 lg:mt-6 sm:mt-5 mt-4 flex flex-col items-center sm:items-start w-full"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="lg:size-5 size-4 text-[#001D80]" />
              <span className="text-[#001D80] lg:text-lg text-base">
                Nia@noovio.co.id
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="lg:size-5 size-4 text-[#001D80]" />
              <span className="text-[#001D80] lg:text-lg text-base">
                +6285640718857
              </span>
            </div>
          </m.div>
        </div>
        <m.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-background rounded-2xl sm:rounded-3xl lg:py-8 py-6 sm:px-8 px-5 lg:px-10 sm:w-[54%] xl:w-[60%] lg:w-[55%] w-full"
        >
          <h4 className="sm:text-2xl text-xl font-bold">
            Punya pertanyaan terkait AI Noovio?
          </h4>
          <p className="sm:text-base text-sm text-[#001D80] mt-2 mb-6">
            Isi data dirimu, dan tim kami akan segera menghubungimu.
          </p>

          <form onSubmit={onSubmit} className="lg:space-y-4 space-y-3">
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
            <Button
              type="submit"
              className="w-full h-12 sm:!text-lg !mt-4 lg:!mt-8 !text-base bg-gradient-to-r from-primary-accent to-primary hover:opacity-90 !font-semibold"
              isLoading={isLoading}
            >
              Kirim Pesan
            </Button>
          </form>
        </m.div>
      </div>
    </section>
  );
};

export default memo(FormSection);
