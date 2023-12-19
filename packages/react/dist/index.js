"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Alert: () => Alert,
  Avatar: () => Avatar,
  AvatarComponents: () => AvatarComponents,
  Dialog: () => Dialog,
  Header: () => Header,
  ModalAlert: () => ModalAlert,
  Text: () => Text,
  useAlert: () => useAlert
});
module.exports = __toCommonJS(src_exports);

// src/components/Alert/Alert.tsx
var import_react = require("react");
var import_lucide_react = require("lucide-react");
var import_react2 = require("@headlessui/react");
var import_jsx_runtime = require("react/jsx-runtime");
function Alert({
  title,
  size = "small",
  variant = "info",
  children,
  onClose,
  link,
  textLink
}) {
  const [visible, setVisible] = (0, import_react.useState)(true);
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react2.Transition,
    {
      appear: true,
      show: visible,
      enter: "transition ease-out duration-400 transform",
      enterFrom: "opacity-0 translate-x-1 translate-y-0",
      enterTo: "opacity-100 translate-x-0 translate-y-0",
      leave: "transition ease-out duration-400 transform",
      leaveFrom: "opacity-100 translate-x-1 translate-y-0",
      leaveTo: "opacity-0 translate-x-2 translate-y-0",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          className: `${classVariant[variant]} ${baseStyles} ${sizeStyles2[size]}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-4", children: variant === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.CheckCircle2, { size: 16, className: "text-success-600" }) : variant === "danger" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.AlertCircleIcon, { size: 16, className: "text-danger-600" }) : variant === "warning" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.AlertCircleIcon, { size: 16, className: "text-warning-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Info, { size: 16, className: "text-primary-600" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "div",
              {
                className: `text-sm ${sizeStyles2[size]} ${size === "large" ? "mr-2 justify-start text-start" : "flex mr-2 text-center"}`,
                children: [
                  title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "font-bold text-neutral-800 text-sm mb-1 mr-1", children: title }),
                  children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mr-2 text-neutral-800", children }),
                  link && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "a",
                    {
                      href: link,
                      className: "text-primary-700 flex justify-normal items-center gap-1 self-baseline",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: [
                        textLink || link,
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ExternalLink, { size: 11, className: "text-primary-700" })
                      ]
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                onClick: () => {
                  setVisible(false);
                  onClose && onClose();
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { size: 16, className: "absolute right-5 text-neutral-700" })
              }
            )
          ]
        }
      )
    }
  );
}

// src/components/Alert/useAlert.tsx
var import_react3 = require("react");
var import_react4 = require("@headlessui/react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function useAlert() {
  const [list, setAlerts] = (0, import_react3.useState)([]);
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
    alerts: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "absolute top-1 right-2", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: list.map((t, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react4.Transition,
      {
        show: !!list[index],
        enter: "transition ease-out duration-400 transform",
        enterFrom: "opacity-0 translate-x-1 translate-y-0",
        enterTo: "opacity-100 translate-x-0 translate-y-0",
        leave: "transition ease-out duration-400 transform",
        leaveFrom: "opacity-100 translate-x-1 translate-y-0",
        leaveTo: "opacity-0 translate-x-2 translate-y-0",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_react5 = require("@nextui-org/react");
var import_tailwind_merge = require("tailwind-merge");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Avatar = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_react5.Avatar,
    __spreadProps(__spreadValues({}, props), {
      icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.AvatarIcon, {}),
      className: (0, import_tailwind_merge.twMerge)("bg-alternative-500 text-black", className)
    })
  ) });
};

// src/components/Avatar/AvatarGroup.tsx
var import_react6 = require("@nextui-org/react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var AvatarGroup = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react6.AvatarGroup, __spreadProps(__spreadValues({}, props), { children }));
};

// src/components/Avatar/index.ts
var AvatarComponents = {
  Group: AvatarGroup,
  Avatar
};

// src/components/Dialog/DialogFooter.tsx
var import_react7 = require("@nextui-org/react");
var import_tailwind_merge2 = require("tailwind-merge");
var import_jsx_runtime5 = require("react/jsx-runtime");
function ModalFooter(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_react7.ModalFooter,
    __spreadProps(__spreadValues({}, props), {
      className: (0, import_tailwind_merge2.twMerge)(
        "justify-between w-full rounded border-solid items-center pt-4 pb-4 flex border-t bg-neutral-100 border-neutral-200",
        className
      ),
      children
    })
  );
}

// src/components/Dialog/DialogHeader.tsx
var import_react8 = require("@nextui-org/react");
var import_lucide_react2 = require("lucide-react");
var import_tailwind_merge3 = require("tailwind-merge");
var import_jsx_runtime6 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_react8.ModalHeader,
    __spreadProps(__spreadValues({
      className: (0, import_tailwind_merge3.twMerge)(
        "w-full border-solid flex h-16 rounded items-center border-b bg-neutral-100 border-neutral-200 ",
        className
      )
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex items-center justify-between w-full", children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "button",
          {
            onClick: onClose,
            className: "h-8 w-8 bg-neutral-0 items-center text-center justify-center flex border border-neutral-200 border-solid rounded ",
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react2.X, { size: 12, className: "text-neutral-600 " })
          }
        )
      ] })
    })
  );
}

// src/components/Dialog/Dialog.tsx
var import_react9 = require("@nextui-org/react");
var import_tailwind_merge4 = require("tailwind-merge");
var import_jsx_runtime7 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    import_react9.Modal,
    __spreadProps(__spreadValues({}, props), {
      scrollBehavior: "inside",
      hideCloseButton: hideCloseButton != null ? hideCloseButton : true,
      className: (0, import_tailwind_merge4.twMerge)(
        "rounded justify-center max-w-[52rem] max-h-[80vh]",
        className
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react9.ModalContent, { className: "", children })
    })
  );
}

// src/components/Dialog/DialogContent.tsx
var import_react10 = require("@nextui-org/react");
var import_tailwind_merge5 = require("tailwind-merge");
var import_jsx_runtime8 = require("react/jsx-runtime");
function DialogContent(_a) {
  var _b = _a, {
    children,
    className
  } = _b, props = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react10.ModalBody, __spreadProps(__spreadValues({ className: (0, import_tailwind_merge5.twMerge)("gap-3", className) }, props), { children }));
}

// src/components/Dialog/index.ts
var Dialog = {
  Content: DialogContent,
  Header: ModalHeader,
  Footer: ModalFooter,
  Root: DialogComponent
};

// src/components/Header/Header.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function Header({
  title,
  subtitle,
  back,
  primaryActionBtn,
  secondaryActionBtn,
  tertiaryActionBtn
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "p-4 sm:px-9 sm:py-8 font-system-font gap-2 flex flex-wrap justify-between bg-neutral-100 text-black", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex gap-3 gap-x-4 flex-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-col justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "text-sm mb-1", children: back || null }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { className: "text-lg sm:text-2xl font-bold text-neutral-800", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "text-sm text-neutral-600", children: subtitle })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex mb-2 items-center hidden sm:flex", children: secondaryActionBtn || null })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-wrap gap-2 items-center justify-normal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex items-center sm:hidden", children: secondaryActionBtn || null }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: tertiaryActionBtn || null }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: primaryActionBtn || null })
    ] })
  ] });
}

// src/components/ModalAlert/Modal.tsx
var import_react11 = require("@nextui-org/react");
var import_tailwind_merge6 = require("tailwind-merge");
var import_jsx_runtime10 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    import_react11.Modal,
    __spreadProps(__spreadValues({}, props), {
      hideCloseButton: hideCloseButton != null ? hideCloseButton : true,
      size: size != null ? size : "lg",
      className: (0, import_tailwind_merge6.twMerge)("rounded", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react11.ModalContent, { children })
    })
  );
}

// src/components/ModalAlert/ModalContent.tsx
var import_react12 = require("@nextui-org/react");
var import_tailwind_merge7 = require("tailwind-merge");
var import_jsx_runtime11 = require("react/jsx-runtime");
function ModalContent3(_a) {
  var _b = _a, {
    children,
    className
  } = _b, props = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react12.ModalBody, __spreadProps(__spreadValues({ className: (0, import_tailwind_merge7.twMerge)("py-3 gap-3", className) }, props), { children }));
}

// src/components/ModalAlert/ModalFooter.tsx
var import_react13 = require("@nextui-org/react");
var import_tailwind_merge8 = require("tailwind-merge");
var import_jsx_runtime12 = require("react/jsx-runtime");
function ModalFooter2(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_react13.ModalFooter,
    __spreadProps(__spreadValues({
      className: (0, import_tailwind_merge8.twMerge)(
        "justify-between border-solid border-t border-neutral-200",
        className
      )
    }, props), {
      children
    })
  );
}

// src/components/ModalAlert/ModalHeader.tsx
var import_react14 = require("@nextui-org/react");
var import_tailwind_merge9 = require("tailwind-merge");
var import_jsx_runtime13 = require("react/jsx-runtime");
function ModalHeader2(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    import_react14.ModalHeader,
    __spreadProps(__spreadValues({
      className: (0, import_tailwind_merge9.twMerge)(
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
var import_tailwind_merge10 = require("tailwind-merge");
var import_jsx_runtime14 = require("react/jsx-runtime");
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
  const textStyles = (0, import_tailwind_merge10.twMerge)(
    sizeStyles[size],
    "text-neutral-700",
    "font-semi-bold",
    className
  );
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: textStyles, children });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  Avatar,
  AvatarComponents,
  Dialog,
  Header,
  ModalAlert,
  Text,
  useAlert
});
