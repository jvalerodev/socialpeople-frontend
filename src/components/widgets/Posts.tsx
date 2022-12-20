import { Box } from '@mui/material';
import { useAuth } from 'hooks';
import { useEffect } from 'react';
import PostWidget from './Post';

interface Props {
  userId: string;
  isProfile?: boolean;
}

const PostsWidget = ({ userId, isProfile = false }: Props) => {
  const { user, posts, getFeedPosts, getUserPosts } = useAuth();

  useEffect(() => {
    if (!user) return;

    if (isProfile) {
      getUserPosts(userId);
    } else {
      getFeedPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box mt={isProfile ? undefined : '2rem'}>
      {posts.map(
        ({
          _id,
          userId,
          firstname,
          lastname,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            userId={userId}
            name={`${firstname} ${lastname}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </Box>
  );
};

export default PostsWidget;
