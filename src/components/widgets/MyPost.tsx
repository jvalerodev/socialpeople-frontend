import { useState } from 'react';
import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined
} from '@mui/icons-material';
import {
  Box,
  Divider,
  Typography,
  InputBase,
  Button,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { useAuth } from 'hooks';
import { FlexBetween, WidgetWrapper } from 'components/styles';
import UserImage from 'components/styles/UserImage';
import { DropContainer } from 'components/forms/styles';
import { ThemeOptions } from 'types/typings';

const MyPost = () => {
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [post, setPost] = useState('');
  const { user } = useAuth();

  const { handlePost } = useAuth();

  const isMobileScreen = useMediaQuery('(max-width: 1000px)');

  const { palette } = useTheme<ThemeOptions>();
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const handleSubmit = async () => {
    await handlePost(image, post);
    setImage(null);
    setPost('');
  };

  const onDropAccepted = (acceptedFiles: File[]) => {
    setImage(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': ['.jpg', '.jpeg', '.png'] },
    multiple: false,
    maxSize: 1048576,
    onDropAccepted
  });

  if (!user) return null;

  return (
    <WidgetWrapper palette={palette}>
      <FlexBetween gap="1.5rem">
        <UserImage image={user.picturePath} />

        <InputBase
          placeholder="What's on your mind..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            width: '100%',
            backgroundColor: palette.neutral.light,
            borderRadius: '2rem',
            padding: '1rem 2rem'
          }}
        />
      </FlexBetween>

      {isImage && (
        <Box
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
        >
          <FlexBetween>
            <DropContainer {...getRootProps()} palette={palette} width="100%">
              <input {...getInputProps()} />

              {!image ? (
                <Typography>Add image here...</Typography>
              ) : (
                <FlexBetween>
                  <Typography>{image.name}</Typography>

                  <EditOutlined />
                </FlexBetween>
              )}
            </DropContainer>

            {image && (
              <IconButton onClick={() => setImage(null)} sx={{ width: '10%' }}>
                <DeleteOutlined />
              </IconButton>
            )}
          </FlexBetween>
        </Box>
      )}

      <Divider sx={{ margin: '1.25rem 0' }} />

      <FlexBetween>
        <FlexBetween
          gap="0.25rem"
          onClick={() => setIsImage(!isImage)}
          sx={{ cursor: 'pointer', '&:hover': { color: medium } }}
          color={mediumMain}
        >
          <ImageOutlined />

          <Typography>Image</Typography>
        </FlexBetween>

        {!isMobileScreen ? (
          <>
            <FlexBetween
              gap="0.25rem"
              sx={{ cursor: 'pointer', '&:hover': { color: medium } }}
              color={mediumMain}
            >
              <GifBoxOutlined />

              <Typography>Clip</Typography>
            </FlexBetween>

            <FlexBetween
              gap="0.25rem"
              sx={{ cursor: 'pointer', '&:hover': { color: medium } }}
              color={mediumMain}
            >
              <AttachFileOutlined />

              <Typography>Attachment</Typography>
            </FlexBetween>

            <FlexBetween
              gap="0.25rem"
              sx={{ cursor: 'pointer', '&:hover': { color: medium } }}
              color={mediumMain}
            >
              <MicOutlined />

              <Typography>Audio</Typography>
            </FlexBetween>
          </>
        ) : (
          <FlexBetween
            gap="0.25rem"
            sx={{ cursor: 'pointer', '&:hover': { color: medium } }}
            color={mediumMain}
          >
            <MoreHorizOutlined />
          </FlexBetween>
        )}

        <Button
          disabled={!post && !image}
          onClick={handleSubmit}
          sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: '3rem'
          }}
        >
          Post
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default MyPost;
