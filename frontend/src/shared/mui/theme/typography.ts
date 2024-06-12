const FONT_PRIMARY = '"Exo 2", sans-serif'; // Google Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: 'clamp(18px, 1.66vw, 24px)',
  },
  h2: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: 'clamp(16px, 1.52vw, 22px)',
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: 'clamp(14px, 1.11vw, 16px)',
  },
  h4: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: 'clamp(14x, 1.11vw, 16px)',
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: 'clamp(12px, 0.97vw, 14px)',
  },
  h6: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: 'clamp(12px, 0.97vw, 14px)',
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: 'clamp(12px, 0.97vw, 14px)',
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: 'clamp(12px, 0.83vw, 12px)',
  },
  body1: {
    lineHeight: 1.5,
    fontSize: 'clamp(12px, 1.11vw, 16px)',
  },
  body2: {
    lineHeight: 1.5,
    fontSize: 'clamp(12px, 0.97vw, 14px)',
  },
  caption: {
    lineHeight: 1,
    fontSize: 'clamp(12px, 1.11vw, 16px)',
  },
  overline: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: 'clamp(12px, 1.11vw, 16px)',
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: 'clamp(12px, 1.25vw, 18px)',
    textTransform: 'none',
  },
} as const;

export default typography;
