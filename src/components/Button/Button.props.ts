import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { PhoneNumber } from "../../interfaces/phoneNumber.interface";

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "onAnimationStart" | "onDragStart" | "OnDragEnd" | "onDrag" | "ref"
  > {
  valid: boolean;
}
