import { Alert, AlertColor, Box } from '@mui/material';

interface Props {
  type: AlertColor;
  text: string;
}

const Message = ({ type, text }: Props) => {
  return (
    <Box gridColumn="span 4">
      <Alert severity={type}>{text}</Alert>
    </Box>
  );
};

export default Message;
