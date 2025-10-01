import { cn } from "@/lib/utils";
import { forwardRef, memo } from "react";

interface Props {
  label?: string;
  labelClassName?: string;
  error?: string;
}

const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & Props
>((props, ref) => {
  const { label, error, className, labelClassName, id, ...rest } = props;

  return (
    <div className="relative gap-2 md:gap-2.5 flex flex-col w-full">
      {label && (
        <label
          htmlFor={id}
          className={cn("md:text-sm font-medium text-sm", labelClassName)}
        >
          {label}
        </label>
      )}

      <textarea
        {...rest}
        id={id}
        ref={ref}
        className={cn(
          "outline-none px-4 w-full h-full min-h-12 peer md:!text-base !text-base text-foreground placeholder:text-[#ACD0CF] border-[#D8EEEE] focus:border focus:border-[#7180EB] bg-[#F2FFFF] rounded-lg py-2.5 border focus:bg-background shadow-[2px_2px_12px_0px_#E4ECFF]/60 dark:shadow-[2px_2px_12px_0px_#000000]/40 dark:border-input",
          error && "border-destructive",
          className
        )}
        rows={4}
      ></textarea>

      {error && <p className="text-destructive text-sm md:text-sm">{error}</p>}
    </div>
  );
});

Textarea.displayName = "Textarea";

export default memo(Textarea);
