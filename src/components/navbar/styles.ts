import { Select } from '@mui/material';
import { styled } from '@mui/system';
import { Palette } from 'types/typings';

export const InputSelect = styled(Select)(({ palette }: Palette) => ({
  backgroundColor: palette.neutral.light,
  width: '150px',
  borderRadius: '0.25rem',
  padding: '0.25rem 1rem',
  '& .MuiSvgIcon-root': {
    paddingRight: '0.25rem',
    width: '2.5rem'
  },
  '& .MuiSelect-select:focus': {
    backgroundColor: palette.neutral.light
  }
}));
