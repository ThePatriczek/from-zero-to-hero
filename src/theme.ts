import createTheme from 'spectacle/lib/themes/default';

export const primary = '#FFF';
export const secondary = '#1F2022';
export const tertiary = '#03A9FC';
export const quaternary = '#CECECE';
export const quinary = 'hotpink';

export const theme = createTheme(
  {
    primary,
    secondary,
    tertiary,
    quaternary,
    quinary
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);
