import { AlertProps, Alert, useAlert } from "@asyncui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    title: "Warning alert:",
    children: "Alert with title and longer description.",
    variant: "warning",
    onClose: () => {},
    size: "large",
    link: "https://www.google.com/",
    textLink: "Saiba Mais",
  },
  argTypes: {
    variant: {
      control: { type: "inline-radio" },
      options: ["warning", "success", "info", "danger"],
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta<AlertProps>;

export const Alert_: StoryObj<AlertProps> = {};

export const Action = () => {
  const { alerts, createToast } = useAlert();

  const addAlert = () => {
    createToast({
      title: "Warning alert:",
      children: "Alert with title and longer description.",
      onClose: () => {},
      size: "large",
      link: "https://www.google.com/",
      textLink: "Saiba Mais",
    });
  };
  return (
    <button
      onClick={addAlert}
      className="bg-white border text-colors-neutral-1000 px-6 py-2 rounded-md"
    >
      Adicionar Alert
      {alerts}
    </button>
  );
};
