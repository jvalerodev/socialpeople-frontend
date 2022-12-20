import { useNavigate } from 'react-router-dom';
import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { FlexBetween } from 'components/styles';
import UserImage from 'components/styles/UserImage';
import { useAuth } from 'hooks';
import { ThemeOptions } from 'types/theme';

interface Props {
  friendId: string;
  name: string;
  subtitle?: string;
  userPicturePath?: string;
}

const FriendWidget = ({ friendId, name, subtitle, userPicturePath }: Props) => {
  const { palette } = useTheme<ThemeOptions>();
  const { user, patchFriend } = useAuth();
  const navigate = useNavigate();

  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  const isFriend = user?.friends.find((friend) => friend._id === friendId);

  const handleClick = () => {
    navigate(`/profile/${friendId}`);
    navigate(0);
  };

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath || ''} size="55px" />

        <Box onClick={handleClick}>
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{ '&:hover': { color: primaryLight, cursor: 'pointer' } }}
          >
            {name}
          </Typography>

          <Typography color={medium} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>

      <IconButton
        onClick={() => patchFriend(friendId)}
        sx={{ backgroundColor: primaryLight, p: '0.6rem' }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};

export default FriendWidget;
