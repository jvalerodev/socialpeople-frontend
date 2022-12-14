import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Palette } from 'types/typings';

type TypeScreen = {
  isMobileScreen: boolean;
};

export const FormContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isMobileScreen'
})(({ isMobileScreen }: TypeScreen) => ({
  display: 'grid',
  gap: '30px',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  '& > div': { gridColumn: !isMobileScreen ? '' : 'span 4' }
}));

export const SubmitButton = styled(Button)(({ palette }: Palette) => ({
  margin: '2rem 0',
  padding: '1rem',
  backgroundColor: palette.primary.main,
  color: palette.background.alt,
  '&:hover': { color: palette.primary.main }
}));

export const BottomText = styled(Typography)(({ palette }: Palette) => ({
  color: palette.primary.main,
  '&:hover': {
    cursor: 'pointer',
    color: palette.primary.light
  }
}));

export const DropContainer = styled(Box)(({ palette }: Palette) => ({
  border: `2px dashed ${palette.primary.main}`,
  padding: '1rem',
  '&:hover': { cursor: 'pointer' }
}));
