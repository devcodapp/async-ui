import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode } from 'react';
import { AvatarProps as AvatarProps$1, AvatarGroupProps as AvatarGroupProps$1, ModalFooterProps as ModalFooterProps$1, ModalHeaderProps as ModalHeaderProps$1, ModalProps as ModalProps$1, ModalBodyProps } from '@nextui-org/react';

interface AlertProps {
    title?: string;
    variant?: 'success' | 'danger' | 'warning' | 'info';
    size?: 'small' | 'large';
    children: ReactNode;
    onClose: () => void;
    link?: string;
    textLink?: string;
}
declare function Alert({ title, size, variant, children, onClose, link, textLink, }: AlertProps): react_jsx_runtime.JSX.Element;

type Toast = {
    children: string;
    variant?: 'success' | 'danger' | 'warning' | 'info';
    size?: 'small' | 'large';
    title?: string;
    onClose: () => void;
    link?: string;
    textLink?: string;
};
declare function useAlert(): {
    alerts: react_jsx_runtime.JSX.Element;
    createToast: (options: Toast) => void;
};

interface AvatarProps extends AvatarProps$1 {
    src?: string;
    size?: 'sm' | 'md' | 'lg';
    isBordered?: boolean;
    isDisabled?: boolean;
    isFocusable?: boolean;
}
declare const Avatar: ({ className, ...props }: AvatarProps) => react_jsx_runtime.JSX.Element;

interface AvatarGroupProps extends AvatarGroupProps$1 {
    max: number;
    total: number;
    isBordered?: boolean;
    isDisabled?: boolean;
    children: ReactNode;
}

declare const AvatarComponents: {
    Group: ({ children, ...props }: AvatarGroupProps) => react_jsx_runtime.JSX.Element;
    Avatar: ({ className, ...props }: AvatarProps) => react_jsx_runtime.JSX.Element;
};

interface DialogFooterProps extends ModalFooterProps$1 {
    children: ReactNode;
}
declare function ModalFooter$1({ className, children, ...props }: DialogFooterProps): react_jsx_runtime.JSX.Element;

interface DialogHeaderProps extends ModalHeaderProps$1 {
    children: ReactNode;
    onClose: () => void;
}
declare function ModalHeader$1({ onClose, className, children, ...props }: DialogHeaderProps): react_jsx_runtime.JSX.Element;

interface DialogProps extends ModalProps$1 {
    children: ReactNode;
}
declare function DialogComponent({ hideCloseButton, children, className, ...props }: DialogProps): react_jsx_runtime.JSX.Element;

interface DialogContentProps extends ModalBodyProps {
    children: ReactNode;
}
declare function DialogContent({ children, className, ...props }: DialogContentProps): react_jsx_runtime.JSX.Element;

declare const Dialog: {
    Content: typeof DialogContent;
    Header: typeof ModalHeader$1;
    Footer: typeof ModalFooter$1;
    Root: typeof DialogComponent;
};

interface HeaderProps {
    title: string;
    subtitle: string;
    back?: ReactNode;
    primaryActionBtn?: ReactNode;
    secondaryActionBtn?: ReactNode;
    tertiaryActionBtn?: ReactNode;
}
declare function Header({ title, subtitle, back, primaryActionBtn, secondaryActionBtn, tertiaryActionBtn, }: HeaderProps): react_jsx_runtime.JSX.Element;

interface ModalProps extends ModalProps$1 {
    children: ReactNode;
}
declare function ModalComponent({ hideCloseButton, className, size, children, ...props }: ModalProps): react_jsx_runtime.JSX.Element;

interface ModalContentProps extends ModalBodyProps {
    children: ReactNode;
}
declare function ModalContent({ children, className, ...props }: ModalContentProps): react_jsx_runtime.JSX.Element;

interface ModalFooterProps extends ModalFooterProps$1 {
    children: ReactNode;
}
declare function ModalFooter({ className, children, ...props }: ModalFooterProps): react_jsx_runtime.JSX.Element;

interface ModalHeaderProps extends ModalHeaderProps$1 {
    children?: ReactNode;
}
declare function ModalHeader({ className, children, ...props }: ModalHeaderProps): react_jsx_runtime.JSX.Element;

declare const ModalAlert: {
    Content: typeof ModalContent;
    Header: typeof ModalHeader;
    Footer: typeof ModalFooter;
    Root: typeof ModalComponent;
};

interface TextProps {
    children: React.ReactNode;
    className?: string;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
declare const Text: React.FC<TextProps>;

export { Alert, type AlertProps, Avatar, AvatarComponents, type AvatarProps, Dialog, Header, type HeaderProps, ModalAlert, Text, type TextProps, useAlert };
