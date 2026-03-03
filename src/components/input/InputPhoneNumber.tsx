"use client";

import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { memo, useState } from "react";
import "react-phone-input-2/lib/style.css";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

interface Props {
  label?: string;
  labelClassName?: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const InputPhoneNumber = ({
  value,
  label = "Phone Number",
  labelClassName,
  onChange,
  error,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={cn("flex flex-col gap-2 md:gap-2.5 text-foreground")}>
      <label
        className={cn("text-foreground text-sm font-medium", labelClassName)}
      >
        {label}
      </label>
      <PhoneInput
        country={"id"}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        containerClass={cn(
          "react-tel-input",
          isFocused && "focus",
          error && "error"
        )}
      />
      {error && <span className={cn("text-destructive text-sm")}>{error}</span>}
    </div>
  );
};

export default memo(InputPhoneNumber);
