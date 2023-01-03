import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from "../../components/MyLabel";

export default {
    title: "UI/MyLabel",
    component: MyLabel,
    args: {
        size: "normal",
        color: "primary"
    },
    argTypes: {
        color: { control: 'select', },
        fontColor: { control: 'color' },
    }
} as ComponentMeta<typeof MyLabel>


const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});

Basic.args = {
    size: "h2",
    label: "I'm a label",
}

export const AllCaps = Template.bind({});

AllCaps.args = {
    label: "All caps label",
    allCaps: true,

}

export const Tertiary = Template.bind({});

Tertiary.args = {
    label: "I'm a tertiary label",
    color: "tertiary",
}

export const Secondary = Template.bind({});

Secondary.args = {
    label: "I'm a secondary label",
    color: "secondary",
}

// Custom font color

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
    size: 'h1',
    label: "Custom font color",
    fontColor: '#0074ff'
}

