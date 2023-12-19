var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/Alert/Alert.tsx
import { useState, useEffect } from "react";
import {
  CheckCircle2,
  AlertCircleIcon,
  Info,
  X,
  ExternalLink
} from "lucide-react";
import { Transition } from "@headlessui/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function Alert({
  title,
  size = "small",
  variant = "info",
  children,
  onClose,
  link,
  textLink
}) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onClose && onClose();
    }, 5e3);
    return () => clearTimeout(timeout);
  }, [onClose]);
  const baseStyles = "p-5 rounded shadow border border-solid m-5 flex gap-3.5 items-start relative";
  const sizeStyles2 = {
    small: "min-h-16 min-w-[31.25rem]",
    large: "min-h-32 max-w-[31.25rem]"
  };
  const classVariant = {
    success: "bg-success-100 border-success-200 ",
    info: "bg-primary-300 border-primary-400",
    danger: "bg-danger-100 border-danger-200 ",
    warning: "bg-warning-100 border-warning-200 "
  };
  return /* @__PURE__ */ jsx(
    Transition,
    {
      appear: true,
      show: visible,
      enter: "transition ease-out duration-400 transform",
      enterFrom: "opacity-0 translate-x-1 translate-y-0",
      enterTo: "opacity-100 translate-x-0 translate-y-0",
      leave: "transition ease-out duration-400 transform",
      leaveFrom: "opacity-100 translate-x-1 translate-y-0",
      leaveTo: "opacity-0 translate-x-2 translate-y-0",
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `${classVariant[variant]} ${baseStyles} ${sizeStyles2[size]}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-4", children: variant === "success" ? /* @__PURE__ */ jsx(CheckCircle2, { size: 16, className: "text-success-600" }) : variant === "danger" ? /* @__PURE__ */ jsx(AlertCircleIcon, { size: 16, className: "text-danger-600" }) : variant === "warning" ? /* @__PURE__ */ jsx(AlertCircleIcon, { size: 16, className: "text-warning-600" }) : /* @__PURE__ */ jsx(Info, { size: 16, className: "text-primary-600" }) }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: `text-sm ${sizeStyles2[size]} ${size === "large" ? "mr-2 justify-start text-start" : "flex mr-2 text-center"}`,
                children: [
                  title && /* @__PURE__ */ jsx("p", { className: "font-bold text-neutral-800 text-sm mb-1 mr-1", children: title }),
                  children && /* @__PURE__ */ jsx("p", { className: "mr-2 text-neutral-800", children }),
                  link && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: link,
                      className: "text-primary-700 flex justify-normal items-center gap-1 self-baseline",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: [
                        textLink || link,
                        /* @__PURE__ */ jsx(ExternalLink, { size: 11, className: "text-primary-700" })
                      ]
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  setVisible(false);
                  onClose && onClose();
                },
                children: /* @__PURE__ */ jsx(X, { size: 16, className: "absolute right-5 text-neutral-700" })
              }
            )
          ]
        }
      )
    }
  );
}

// src/components/Alert/useAlert.tsx
import { useState as useState2 } from "react";
import { Transition as Transition2 } from "@headlessui/react";
import { jsx as jsx2 } from "react/jsx-runtime";
function useAlert() {
  const [list, setAlerts] = useState2([]);
  const createToast = (options) => {
    setAlerts([...list, options]);
  };
  const closeAlert = (index) => {
    setAlerts((alerts) => {
      const updatedAlerts = [...alerts];
      updatedAlerts.splice(index, 1);
      return updatedAlerts;
    });
  };
  return {
    alerts: /* @__PURE__ */ jsx2("div", { className: "absolute top-1 right-2", children: /* @__PURE__ */ jsx2("div", { children: list.map((t, index) => /* @__PURE__ */ jsx2(
      Transition2,
      {
        show: !!list[index],
        enter: "transition ease-out duration-400 transform",
        enterFrom: "opacity-0 translate-x-1 translate-y-0",
        enterTo: "opacity-100 translate-x-0 translate-y-0",
        leave: "transition ease-out duration-400 transform",
        leaveFrom: "opacity-100 translate-x-1 translate-y-0",
        leaveTo: "opacity-0 translate-x-2 translate-y-0",
        children: /* @__PURE__ */ jsx2(
          Alert,
          {
            variant: t.variant,
            size: t.size,
            title: t.title,
            onClose: () => closeAlert(index),
            link: t.link,
            textLink: t.textLink,
            children: t.children
          }
        )
      },
      index
    )) }) }),
    createToast
  };
}

// src/components/Avatar/Avatar.tsx
import {
  AvatarIcon,
  Avatar as AvatarNextUI
} from "@nextui-org/react";
import { twMerge } from "tailwind-merge";
import { jsx as jsx3 } from "react/jsx-runtime";
var Avatar = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(
    AvatarNextUI,
    __spreadProps(__spreadValues({}, props), {
      icon: /* @__PURE__ */ jsx3(AvatarIcon, {}),
      className: twMerge("bg-alternative-500 text-black", className)
    })
  ) });
};

// src/components/Avatar/AvatarGroup.tsx
import {
  AvatarGroup as AvatarGroupNextUI
} from "@nextui-org/react";
import { jsx as jsx4 } from "react/jsx-runtime";
var AvatarGroup = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx4(AvatarGroupNextUI, __spreadProps(__spreadValues({}, props), { children }));
};

// src/components/Avatar/index.ts
var AvatarComponents = {
  Group: AvatarGroup,
  Avatar
};

// src/components/Dialog/DialogFooter.tsx
import {
  ModalFooter as DialogFooterNextUI
} from "@nextui-org/react";
import { twMerge as twMerge2 } from "tailwind-merge";
import { jsx as jsx5 } from "react/jsx-runtime";
function ModalFooter(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsx5(
    DialogFooterNextUI,
    __spreadProps(__spreadValues({}, props), {
      className: twMerge2(
        "justify-between w-full rounded border-solid items-center pt-4 pb-4 flex border-t bg-neutral-100 border-neutral-200",
        className
      ),
      children
    })
  );
}

// src/components/Dialog/DialogHeader.tsx
import {
  ModalHeader as DialogHeaderNextUI
} from "@nextui-org/react";
import { X as X2 } from "lucide-react";
import { twMerge as twMerge3 } from "tailwind-merge";
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
function ModalHeader(_a) {
  var _b = _a, {
    onClose,
    className,
    children
  } = _b, props = __objRest(_b, [
    "onClose",
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsx6(
    DialogHeaderNextUI,
    __spreadProps(__spreadValues({
      className: twMerge3(
        "w-full border-solid flex h-16 rounded items-center border-b bg-neutral-100 border-neutral-200 ",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between w-full", children: [
        children,
        /* @__PURE__ */ jsx6(
          "button",
          {
            onClick: onClose,
            className: "h-8 w-8 bg-neutral-0 items-center text-center justify-center flex border border-neutral-200 border-solid rounded ",
            children: /* @__PURE__ */ jsx6(X2, { size: 12, className: "text-neutral-600 " })
          }
        )
      ] })
    })
  );
}

// src/components/Dialog/Dialog.tsx
import {
  Modal as DialogNextUI,
  ModalContent
} from "@nextui-org/react";
import { twMerge as twMerge4 } from "tailwind-merge";
import { jsx as jsx7 } from "react/jsx-runtime";
function DialogComponent(_a) {
  var _b = _a, {
    hideCloseButton,
    children,
    className
  } = _b, props = __objRest(_b, [
    "hideCloseButton",
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsx7(
    DialogNextUI,
    __spreadProps(__spreadValues({}, props), {
      scrollBehavior: "inside",
      hideCloseButton: hideCloseButton != null ? hideCloseButton : true,
      className: twMerge4(
        "rounded justify-center max-w-[52rem] max-h-[80vh]",
        className
      ),
      children: /* @__PURE__ */ jsx7(ModalContent, { className: "", children })
    })
  );
}

// src/components/Dialog/DialogContent.tsx
import {
  ModalBody as DialogBodyNextUI
} from "@nextui-org/react";
import { twMerge as twMerge5 } from "tailwind-merge";
import { jsx as jsx8 } from "react/jsx-runtime";
function DialogContent(_a) {
  var _b = _a, {
    children,
    className
  } = _b, props = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsx8(DialogBodyNextUI, __spreadProps(__spreadValues({ className: twMerge5("gap-3", className) }, props), { children }));
}

// src/components/Dialog/index.ts
var Dialog = {
  Content: DialogContent,
  Header: ModalHeader,
  Footer: ModalFooter,
  Root: DialogComponent
};

// src/components/Header/Header.tsx
import { jsx as jsx9, jsxs as jsxs3 } from "react/jsx-runtime";
function Header({
  title,
  subtitle,
  back,
  primaryActionBtn,
  secondaryActionBtn,
  tertiaryActionBtn
}) {
  return /* @__PURE__ */ jsxs3("div", { className: "p-4 sm:px-9 sm:py-8 font-system-font gap-2 flex flex-wrap justify-between bg-neutral-100 text-black", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex gap-3 gap-x-4 flex-wrap", children: [
      /* @__PURE__ */ jsxs3("div", { className: "flex flex-col justify-center", children: [
        /* @__PURE__ */ jsx9("div", { className: "text-sm mb-1", children: back || null }),
        /* @__PURE__ */ jsx9("h1", { className: "text-lg sm:text-2xl font-bold text-neutral-800", children: title }),
        /* @__PURE__ */ jsx9("h3", { className: "text-sm text-neutral-600", children: subtitle })
      ] }),
      /* @__PURE__ */ jsx9("div", { className: "flex mb-2 items-center hidden sm:flex", children: secondaryActionBtn || null })
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "flex flex-wrap gap-2 items-center justify-normal", children: [
      /* @__PURE__ */ jsx9("div", { className: "flex items-center sm:hidden", children: secondaryActionBtn || null }),
      /* @__PURE__ */ jsx9("div", { children: tertiaryActionBtn || null }),
      /* @__PURE__ */ jsx9("div", { children: primaryActionBtn || null })
    ] })
  ] });
}

// src/components/ModalAlert/Modal.tsx
import {
  ModalContent as ModalContent2,
  Modal as ModalNextUI
} from "@nextui-org/react";
import { twMerge as twMerge6 } from "tailwind-merge";
import { jsx as jsx10 } from "react/jsx-runtime";
function ModalComponent(_a) {
  var _b = _a, {
    hideCloseButton,
    className,
    size,
    children
  } = _b, props = __objRest(_b, [
    "hideCloseButton",
    "className",
    "size",
    "children"
  ]);
  return /* @__PURE__ */ jsx10(
    ModalNextUI,
    __spreadProps(__spreadValues({}, props), {
      hideCloseButton: hideCloseButton != null ? hideCloseButton : true,
      size: size != null ? size : "lg",
      className: twMerge6("rounded", className),
      children: /* @__PURE__ */ jsx10(ModalContent2, { children })
    })
  );
}

// src/components/ModalAlert/ModalContent.tsx
import { ModalBody as ModalBodyNextUI } from "@nextui-org/react";
import { twMerge as twMerge7 } from "tailwind-merge";
import { jsx as jsx11 } from "react/jsx-runtime";
function ModalContent3(_a) {
  var _b = _a, {
    children,
    className
  } = _b, props = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsx11(ModalBodyNextUI, __spreadProps(__spreadValues({ className: twMerge7("py-3 gap-3", className) }, props), { children }));
}

// src/components/ModalAlert/ModalFooter.tsx
import {
  ModalFooter as ModalFooterNextUI
} from "@nextui-org/react";
import { twMerge as twMerge8 } from "tailwind-merge";
import { jsx as jsx12 } from "react/jsx-runtime";
function ModalFooter2(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsx12(
    ModalFooterNextUI,
    __spreadProps(__spreadValues({
      className: twMerge8(
        "justify-between border-solid border-t border-neutral-200",
        className
      )
    }, props), {
      children
    })
  );
}

// src/components/ModalAlert/ModalHeader.tsx
import {
  ModalHeader as ModalHeaderNextUI
} from "@nextui-org/react";
import { twMerge as twMerge9 } from "tailwind-merge";
import { jsx as jsx13 } from "react/jsx-runtime";
function ModalHeader2(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsx13(
    ModalHeaderNextUI,
    __spreadProps(__spreadValues({
      className: twMerge9(
        "pt-6 border-solid border-b border-neutral-200 flex justify-center pb-6",
        className
      )
    }, props), {
      children
    })
  );
}

// src/components/ModalAlert/index.tsx
var ModalAlert = {
  Content: ModalContent3,
  Header: ModalHeader2,
  Footer: ModalFooter2,
  Root: ModalComponent
};

// src/components/Text/Text.tsx
import { twMerge as twMerge10 } from "tailwind-merge";
import { jsx as jsx14 } from "react/jsx-runtime";
var sizeStyles = {
  xxs: "text-[0.7rem]",
  xs: "text-[0.75rem]",
  sm: "text-[0.875rem]",
  md: "text-[1rem]",
  lg: "text-[1.125rem]",
  xl: "text-[2rem]"
};
var Text = ({
  children,
  className,
  size = "md"
}) => {
  const textStyles = twMerge10(
    sizeStyles[size],
    "text-neutral-700",
    "font-semi-bold",
    className
  );
  return /* @__PURE__ */ jsx14("span", { className: textStyles, children });
};
export {
  Alert,
  Avatar,
  AvatarComponents,
  Dialog,
  Header,
  ModalAlert,
  Text,
  useAlert
};
