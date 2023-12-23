import type { Meta, StoryObj } from "@storybook/react";
import { Header, HeaderProps } from "@asyncui/react";
import { ArrowLeft, PencilLineIcon } from "lucide-react";

export default {
  title: "Components/Header",
  component: Header,
  args: {
    title: "Header title",
    subtitle: "Header subtitle",
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      return Story();
    },
  ],
} as Meta<HeaderProps>;

export const Header_: StoryObj<HeaderProps> = {};

export const HeaderWithButton_: StoryObj<HeaderProps> = {
  args: {
    primaryActionBtn: (
      <button className="w-[122px] h-9 px-4 py-2.5 bg-white text-colors-primary-700 border rounded justify-center items-center gap-2 inline-flex">
        Save
      </button>
    ),
    secondaryActionBtn: (
      <button className="w-[76px] text-sm h-8 px-4 py-2 bg-white rounded border border-zinc-200 justify-center items-center gap-2 inline-flex">
        <PencilLineIcon size={12} />
        Edit
      </button>
    ),
    tertiaryActionBtn: (
      <button className="w-[122px] h-9 px-4 py-2.5 bg-white text-colors-primary-700 border rounded justify-center items-center gap-2 inline-flex">
        Cancel
      </button>
    ),
    back: (
      <button className="text-colors-primary-600 flex items-center justify-center gap-1 ">
        <ArrowLeft size={12} /> Back
      </button>
    ),
    title: "Header title",
    subtitle: "Header subtitle",
  },
};
