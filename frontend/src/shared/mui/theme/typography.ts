const FONT_PRIMARY = '"Exo 2", sans-serif'; // Google Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: 'clamp(20px, 2.22vw, 32px)',
  },
  h2: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: 'clamp(18px, 1.95vw, 28.5px)',
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: 'clamp(16px, 1.77vw, 25.5px)',
  },
  h4: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: 'clamp(16px, 1.77vw, 25.5px)',
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: 'clamp(14px, 1.56vw, 22.5px)',
  },
  h6: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: 'clamp(14px, 1.56vw, 22.5px)',
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: 'clamp(14px, 1.56vw, 22.5px)',
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: 'clamp(12px, 1.35vw, 19.5px)',
  },
  body1: {
    lineHeight: 1.5,
    fontSize: 'clamp(14px, 1.56vw, 22.5px)',
  },
  body2: {
    lineHeight: 1.5,
    fontSize: 'clamp(12px, 1.35vw, 19.5px)',
  },
  caption: {
    lineHeight: 1,
    fontSize: 'clamp(10px, 1.11vw, 16px)',
  },
  overline: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: 'clamp(12px, 1.35vw, 19.5px)',
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: 'clamp(14px, 1.56vw, 22.5px)',
    textTransform: 'none',
  },
} as const;

export default typography;
