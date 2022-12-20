import { useState } from 'react';
import { Box, Divider, IconButton, Typography, useTheme } from '@mui/material';
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined
} from '@mui/icons-material';
import { FlexBetween, WidgetWrapper } from 'components/styles';
import { useAuth } from 'hooks';
import Friend from './Friend';
import { ThemeOptions } from 'types/typings';

interface Props {
  postId: string;
  userId: string;
  name: string;
  location?: string;
  description?: string;
  picturePath?: string;
  userPicturePath?: string;
  likes: Map<string, boolean>;
  comments?: string[];
}

const PostWidget = ({
  postId,
  userId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments
}: Props) => {
  const { user, patchLike } = useAuth();
  const [isComments, setIsComments] = useState(false);
  const { palette } = useTheme<ThemeOptions>();

  if (!user) return null;

  const loggedInUserId = user._id;

  const likesMap = new Map(
    Object.entries(likes).map((item) => [item[0], item[1]])
  );

  const isLiked = likesMap.get(loggedInUserId);
  const likeCount = Object.keys(likes).length;

  const main = palette.neutral.main;
  const primary = palette.primary.main;

  return (
    <WidgetWrapper palette={palette} mb="2rem">
      <Friend
        friendId={userId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />

      <Typography color={main} sx={{ mt: '1rem' }}>
        {description}
      </Typography>

      {picturePath && (
        <img
          src={`${process.env.REACT_APP_BACKEND_URL}/assets/${picturePath}`}
          alt="Post"
          width="100%"
          height="auto"
          style={{ borderRadius: '0.75rem', marginTop: '0.75rem' }}
        />
      )}

      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          {/* LIKE BUTTON */}
          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => patchLike(postId)}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>

            <Typography>{likeCount}</Typography>
          </FlexBetween>

          {/* COMMENT BUTTON */}
          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>

            <Typography>{comments?.length}</Typography>
          </FlexBetween>
        </FlexBetween>

        {/* SHARE BUTTON */}
        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>

      {/* COMMENTS SECTION */}
      {isComments && (
        <Box mt="0.5rem">
          {comments?.map((comment, i) => (
            <Box key={`comment-${i}`}>
              <Divider />

              <Typography sx={{ color: main, m: '0.5rem 0', pl: '1rem' }}>
                {comment}
              </Typography>
            </Box>
          ))}

          <Divider />
        </Box>
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;
