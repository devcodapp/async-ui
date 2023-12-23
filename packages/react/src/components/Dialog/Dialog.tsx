import {
  Modal as DialogNextUI,
  ModalProps as DialogPropsNextUI,
  ModalContent,
} from "@nextui-org/react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface DialogProps extends DialogPropsNextUI {
  children: ReactNode;
}

export function DialogComponent({
  hideCloseButton,
  children,
  className,
  ...props
}: DialogProps) {
  return (
    <DialogNextUI
      {...props}
      scrollBehavior="inside"
      hideCloseButton={hideCloseButton ?? true}
      className={twMerge(
        "rounded border border-solid justify-center max-w-[52rem] max-h-[80vh]",
        className
      )}
    >
      <ModalContent className="">{children}</ModalContent>
    </DialogNextUI>
  );
}
