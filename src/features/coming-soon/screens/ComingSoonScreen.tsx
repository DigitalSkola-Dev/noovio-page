"use client";

import { AlertIcon, OrnamentIcon } from "@/components/svg";
import Button from "@/components/ui/button";
import { motion as m } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const ComingSoonScreen = () => {
  const router = useRouter();

  return (
    <main className="h-[80vh] flex flex-col w-full md:px-10 px-6">
      {/* <PageTitleBar /> */}
      <div className="flex flex-col justify-center items-center gap-2 w-full md:h-[calc(100vh-220px)] h-[calc(100vh-210px)] flex-1">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="flex items-center gap-0"
        >
          <h1 className="sm:!text-4xl !my-0 font-bold !text-3xl bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
            Coming Soon{" "}
          </h1>
          <AlertIcon className="-ml-1.5" />
        </m.div>
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          className="text-primary md:text-lg text-base text-center mb-8"
        >
          We’re working on it and we’ll be here soon.
        </m.p>
        <Button
          onClick={() => router.push("/")}
          size="lg"
          className="flex items-center gap-2 h-12 rounded-2xl !px-8 bg-gradient-to-l from-primary via-[#0577EE] to-[#0FD8D2] group"
        >
          <ChevronLeft className="size-5 group-hover:-translate-x-1 transition duration-300" />{" "}
          Go Back
        </Button>
      </div>

      {/* <div className="space-y-4 h-[210px] md:h-[220px] relative">
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address',
            },
          }}
          render={({ field, fieldState }) => (
            <Input {...field} type="email" placeholder="Email" error={fieldState.error?.message} />
          )}
        />
        <CustomButton
          type="button"
          isLoading={false}
          label="Notify Me"
          variant="foreground"
          className="md:h-14 h-12 w-full rounded-2xl"
          onClick={handleSubmit}
        />
      </div> */}
      {/* <div className="absolute bottom-8 -translate-x-1/2 left-1/2">
        <small className="text-center md:!text-base flex items-center gap-1.5">
          Made with <LoveIcon className="size-5" /> by Digital Skola
        </small>
      </div> */}

      <OrnamentIcon className="fixed right-0 bottom-0 z-[-1] md:size-64 size-48" />
    </main>
  );
};

export default ComingSoonScreen;
