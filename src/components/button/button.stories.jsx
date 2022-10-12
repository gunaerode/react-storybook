import { Box } from '@mui/material';
import MuiButton from './button';

export default {
  title: 'form/Button',
  Component: MuiButton,
  args: {
    children: 'Mui Button',
  },
  decorators: [(Story) => <Box mt={'10rem'}>{Story()}</Box>],
};

export const text = () => <MuiButton variant="text">Text</MuiButton>;
export const contained = () => (
  <MuiButton variant="contained">Contained</MuiButton>
);
export const outlined = () => (
  <MuiButton variant="outlined">Outlined</MuiButton>
);

text.storyName = 'Text button';

const Template = (args) => <MuiButton {...args} />;

export const textArgs = Template.bind({});
textArgs.args = {
  variant: 'text',
  children: 'Text Args',
};

export const containedArgs = Template.bind({});
containedArgs.args = {
  variant: 'contained',
  // children: 'Contained Args',
};
