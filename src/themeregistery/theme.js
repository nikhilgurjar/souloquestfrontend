import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'simplebar-react/dist/simplebar.min.css';

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import ComponentsOverrides from './overrides';
import { palette } from './palette';
import { shadows } from './shadows';
import { customShadows } from './customShadows';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: palette,
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  shape: { borderRadius: 8 },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  shadows: shadows,
  customShadows: customShadows
});


theme.components = ComponentsOverrides(theme);

export default theme;

// fetch("https://api.geoapify.com/v1/geocode/autocomplete?text=YOUR_TEXT&lang=en&limit=10&type=amenity&filter=countrycode:in&format=json&apiKey=YOUR_API_KEY")
//https://apidocs.geoapify.com/docs/places/#api