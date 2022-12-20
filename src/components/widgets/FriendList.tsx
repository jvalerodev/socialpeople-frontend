import { useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useAuth } from 'hooks';
import FriendWidget from './Friend';
import { WidgetWrapper } from 'components/styles';
import { ThemeOptions } from 'types/typings';

interface Props {
  userId: string;
}

const FriendListWidget = ({ userId }: Props) => {
  const { palette } = useTheme<ThemeOptions>();
  const { user, getFriends } = useAuth();

  useEffect(() => {
    getFriends(userId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;

  return (
    <WidgetWrapper palette={palette}>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: '1.5rem' }}
      >
        Friend List
      </Typography>

      <Box display="flex" flexDirection="column" gap="1.5rem">
        {user.friends.map((friend) => (
          <FriendWidget
            key={friend._id}
            friendId={friend._id}
            name={`${friend.firtsname} ${friend.lastname}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
