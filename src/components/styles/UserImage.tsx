import { Box } from '@mui/material';

interface Props {
  image: string;
  size?: string;
}

const UserImage = ({ image, size = '60px' }: Props) => {
  return (
    <Box width={size} height={size}>
      <img
        src={`${process.env.REACT_APP_BACKEND_URL}/assets/${image}`}
        alt="User"
        style={{ objectFit: 'cover', borderRadius: '50%' }}
        width={size}
        height={size}
      />
    </Box>
  );
};

export default UserImage;
