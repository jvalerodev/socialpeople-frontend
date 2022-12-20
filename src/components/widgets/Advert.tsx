import { Typography, useTheme } from '@mui/material';
import { FlexBetween, WidgetWrapper } from 'components/styles';
import { ThemeOptions } from 'types/typings';

const AdvertWidget = () => {
  const { palette } = useTheme<ThemeOptions>();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper palette={palette}>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>

        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>

      <img
        src={`${process.env.REACT_APP_BACKEND_URL}/assets/info4.jpeg`}
        alt="Advert"
        width="100%"
        height="auto"
        style={{ borderRadius: '0.75rem', margin: '0.75rem 0' }}
      />

      <FlexBetween>
        <Typography color={main}>MikaCosmetics</Typography>

        <Typography color={medium}>mikacosmetics.com</Typography>
      </FlexBetween>

      <Typography color={medium} m="0.5rem 0">
        Your pathway to stunning and immaculate beauty and made sure your skin
        is exfoliating skin and shining like light.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
