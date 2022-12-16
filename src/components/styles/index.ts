import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { Palette } from 'types/typings';

export const FlexBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const WidgetWrapper = styled(Box)(({ palette }: Palette) => ({
  padding: '1.5rem 1.5rem 0.75rem 1.5rem',
  backgroundColor: palette.background.alt,
  borderRadius: '0.75rem'
}));
