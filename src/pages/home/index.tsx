import { Box, useMediaQuery } from '@mui/material';
import Navbar from 'components/navbar';
import UserWidget from 'components/widgets/User';
import MyPostWidget from 'components/widgets/MyPost';
import PostsWidget from 'components/widgets/Posts';

const Home = () => {
  const isMobileScreen = useMediaQuery('(max-width: 1000px)');

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
          <UserWidget />
        </Box>

        <Box
          flexBasis={!isMobileScreen ? '42%' : undefined}
          mt={!isMobileScreen ? undefined : '2rem'}
        >
          <MyPostWidget />

          <PostsWidget />
        </Box>

        {!isMobileScreen && <Box flexBasis="26%"></Box>}
      </Box>
    </Box>
  );
};

export default Home;
