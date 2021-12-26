import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Heading, { Props as HeadingProps } from "./Heading";

export default {
  title: "atoms/Heading",
  component: Heading,
  argTypes: {
    as: {
      options: ["1", "2", "3", "4", "5", "6"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args: HeadingProps) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  as: "1",
  children: "hoge",
};
