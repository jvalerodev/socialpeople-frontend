import { useAuth } from 'hooks';
import { useEffect } from 'react';
import PostWidget from './Post';

interface Props {
  isProfile?: boolean;
}

const PostsWidget = ({ isProfile = false }: Props) => {
  const { user, posts, getFeedPosts, getUserPosts } = useAuth();

  useEffect(() => {
    if (!user) return;

    if (isProfile) {
      getUserPosts(user._id);
    } else {
      getFeedPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
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
    </>
  );
};

export default PostsWidget;
