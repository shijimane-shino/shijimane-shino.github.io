import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button, { Props as ButtonProps } from "./Button";

export default {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    color: {
      options: ["default", "primary", "secondary"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Button",
  color: "default",
};
