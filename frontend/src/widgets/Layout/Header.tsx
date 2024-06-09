import React from 'react';
// import { Typography, styled } from '@mui/material';
import { HeaderTemplate } from '../../entities/general/layout/Header/Header';

// ----------------------------------------------------------------------

// const HeaderStyled = styled('header')<{ scrollPos: number }>(({ scrollPos, theme }) => ({
//   position: 'sticky',
//   top: 0,
//   display: 'flex',
//   width: '100%',
//   height: HEADER.HEADER_HEIGHT,
//   backgroundColor: theme.palette.background.paper,
//   boxShadow: scrollPos > 50 ? theme.shadows[6] : 'none',
//   zIndex: 7,
//   transition: 'box-shadow 0.5s ease',
//   borderBottom: `2px solid ${theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[500]}`,
// }));

// const SectionStyled = styled('section')(() => ({
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   width: '100%',
//   maxWidth: GENERAL.CONTENT_MAX_WIDTH,
//   justifyContent: 'space-between',
//   margin: '0 auto',
//   padding: `0 ${GENERAL.CONTENT_PADDING_X}`,
//   zIndex: 7,
// }));

// ----------------------------------------------------------------------

export const Header = () => {
  // const [scrollPos] = useScrollPosition();
  // const { isLight, toggleTheme } = useTheme();

  return <HeaderTemplate />;
};
