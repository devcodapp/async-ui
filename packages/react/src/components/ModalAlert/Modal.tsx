import {
  ModalContent,
  Modal as ModalNextUI,
  ModalProps as ModalPropsNextUI,
} from "@nextui-org/react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ModalProps extends ModalPropsNextUI {
  children: ReactNode;
}

export function ModalComponent({
  hideCloseButton,
  className,
  size,
  children,
  ...props
}: ModalProps) {
  return (
    <ModalNextUI
      {...props}
      hideCloseButton={hideCloseButton ?? true}
      size={size ?? "lg"}
      className={twMerge("rounded  border border-solid", className)}
    >
      <ModalContent>{children}</ModalContent>
    </ModalNextUI>
  );
}
