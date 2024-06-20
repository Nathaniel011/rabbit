import type { StoryObj, Meta } from '@storybook/react';
import InputVariableForm from './InputVariableForm';

const meta: Meta<typeof InputVariableForm> = {
  title: 'ui/components/atoms/InputVariableForm',
  component: InputVariableForm,
  argTypes: {
    label: {
      action: 'text',
    },
  },
};


export default meta;
type Story = StoryObj<typeof meta>;

export const text: Story = {
  args: {
    label: 'Name',
    type: 'text',
    value: '',
  },
};


export const email: Story = {
  args: {
    label: 'Email',
    type: 'email',
    value: '',
  },
};

export const password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    value: '',
  },
};