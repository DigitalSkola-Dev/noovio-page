"use client";

import { cn } from "@/lib/utils";
import { Check, Eye, EyeOff, X } from "lucide-react";
import React, { forwardRef, memo, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
  label?: string | React.ReactNode;
  labelClassName?: string;
  clearable?: boolean;
  iconClassName?: string;
  classNameWrapper?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    id,
    type = "text",
    icon,
    name,
    label,
    error,
    value,
    onBlur,
    onFocus,
    readOnly,
    onChange,
    clearable = false,
    className,
    placeholder = "Input here...",
    // defaultValue,
    iconClassName,
    labelClassName,
    classNameWrapper,
    ...rest
  } = props;

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((prev) => !prev);

  const inputType = isVisible && type === "password" ? "text" : type;

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label
          htmlFor={id}
          className={cn("text-sm font-medium md:text-sm", labelClassName)}
        >
          {label}
        </label>
      )}
      <div
        className={cn(
          "relative flex items-center gap-3 rounded-md md:rounded-lg border border-[#D8EEEE] bg-[#F2FFFF] text-primary transition duration-300 overflow-hidden",
          "h-12 md:h-12 shadow-[2px_2px_12px_0px_#E4ECFF]/60 dark:shadow-[2px_2px_12px_0px_#000000]/40 dark:border-input",
          error
            ? "border-destructive focus-within:border-destructive"
            : "focus-within:border-[#7180EB] focus-within:bg-background",
          readOnly && "pointer-events-none cursor-not-allowed",
          classNameWrapper
        )}
      >
        {icon && (
          <span
            className={cn(
              "absolute left-3 md:left-4 flex items-center size-6 justify-center",
              iconClassName
            )}
          >
            {icon}
          </span>
        )}
        <input
          ref={ref}
          id={id}
          name={name}
          type={inputType}
          placeholder={placeholder}
          className={cn(
            "w-full h-full bg-transparent outline-none px-4 placeholder:text-[#ACD0CF] text-foreground text-base",
            (type === "password" || type === "email") && "pr-12",
            icon && "md:pl-12 pl-11",
            className
          )}
          autoComplete={type === "password" ? "current-password" : "off"}
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value !== undefined ? value : ""}
          // defaultValue={defaultValue}
          readOnly={readOnly}
          aria-invalid={!!error}
          {...rest}
        />

        {type === "password" && !clearable && (
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center size-6 focus:outline-none"
            onClick={toggleVisibility}
            tabIndex={-1}
          >
            {isVisible ? (
              <Eye className="text-[#ACD0CF] size-5" />
            ) : (
              <EyeOff className="text-[#ACD0CF] size-5" />
            )}
          </button>
        )}

        {type === "email" && !error && value && !clearable && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#11AF22]">
            <Check className="size-5" />
          </span>
        )}

        {clearable && value && (
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center size-6 focus:outline-none"
            tabIndex={-1}
            onClick={() =>
              onChange?.({
                target: {
                  name: name ?? "",
                  value: "",
                },
              } as React.ChangeEvent<HTMLInputElement>)
            }
          >
            <X className="text-foreground size-5" />
          </button>
        )}
      </div>

      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  );
});

Input.displayName = "Input";

export default memo(Input);
