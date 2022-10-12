import { Box } from '@mui/material';
import MuiInput from './input';

export default {
  title: 'form/Input',
  Component: MuiInput,
  args: {
    children: 'Mui Input',
  },
};

export const outlined = () => <MuiInput variant="outlined">Text</MuiInput>;
export const filled = () => <MuiInput variant="filled">Contained</MuiInput>;
export const standard = () => <MuiInput variant="standard">Outlined</MuiInput>;

outlined.storyName = 'Text input';

const Template = (args) => <MuiInput {...args} />;

export const outlinedArgs = Template.bind({});
outlinedArgs.args = {
  variant: 'outlined',
  children: 'OutlinedArgs Args',
};

export const filledArgs = Template.bind({});
filledArgs.args = {
  variant: 'filled',
  // children: 'Filled Args',
};
