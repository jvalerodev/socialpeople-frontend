import { Box, useMediaQuery } from '@mui/material';
import { useAuth } from 'hooks';
import Navbar from 'components/navbar';
import UserWidget from 'components/widgets/User';
import MyPostWidget from 'components/widgets/MyPost';
import PostsWidget from 'components/widgets/Posts';
import AdvertWidget from 'components/widgets/Advert';
import FriendListWidget from 'components/widgets/FriendList';

const Home = () => {
  const isMobileScreen = useMediaQuery('(max-width: 1000px)');
  const { user } = useAuth();

  if (!user) return null;

  return (
    <Box>
      <Navbar />

      <Box
        width="100%"
        p="2rem 6%"
        display={!isMobileScreen ? 'flex' : 'block'}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={!isMobileScreen ? '26%' : undefined}>
          <UserWidget userId={user._id} picturePath={user.picturePath} />
        </Box>

        <Box
          flexBasis={!isMobileScreen ? '42%' : undefined}
          mt={!isMobileScreen ? undefined : '2rem'}
        >
          <MyPostWidget picturePath={user.picturePath} />

          <PostsWidget userId={user._id} />
        </Box>

        {!isMobileScreen && (
          <Box flexBasis="26%">
            <AdvertWidget />

            <Box m="2rem 0" />

            <FriendListWidget userId={user._id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
