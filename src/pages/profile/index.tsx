import { useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAuth } from 'hooks';
import Navbar from 'components/navbar';
import FriendListWidget from 'components/widgets/FriendList';
import PostsWidget from 'components/widgets/Posts';
import UserWidget from 'components/widgets/User';
import { User } from 'types/typings';
import { UserService } from 'services';

const Profile = () => {
  const [userProfile, setUserProfile] = useState<User>();
  const { userId } = useParams();
  const { token } = useAuth();
  const isMobileScreen = useMediaQuery('(max-width: 1000px)');

  const getUser = async () => {
    if (!userId || !token) return;

    const userProfile = await UserService.getUser(userId, token);

    setUserProfile(userProfile);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!userProfile) return null;

  return (
    <Box>
      <Navbar />

      <Box
        width="100%"
        p="2rem 6%"
        display={!isMobileScreen ? 'flex' : 'block'}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={!isMobileScreen ? '26%' : undefined}>
          <UserWidget
            userId={userProfile._id}
            picturePath={userProfile.picturePath}
          />

          <Box m="2rem 0" />

          <FriendListWidget userId={userProfile._id} />
        </Box>

        <Box flexBasis={!isMobileScreen ? '42%' : undefined}>
          <PostsWidget userId={userProfile._id} isProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
