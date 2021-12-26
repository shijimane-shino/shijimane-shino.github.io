import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Link, { Props as LinkProps } from "./Link";

export default {
  title: "atoms/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args: LinkProps) => (
  <Link {...args} />
);

export const Default = Template.bind({});
Default.args = {
  href: "/hoge",
  children: "hoge",
};
