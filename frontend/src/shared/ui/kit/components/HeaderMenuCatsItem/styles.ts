import { Theme, styled } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link as RouterLink } from 'react-router-dom';
import { GENERAL } from '../../../../../app/config';

interface Props {
  isshown: string;
}

export const LinkStyled = styled(RouterLink)<Props>(({ isshown, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  color: isshown === 'false' ? theme.palette.text.primary : theme.palette.primary.main,

  '&:after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: 0,
    background: theme.palette.primary.main,
    height: '4px',
    width: isshown === 'false' ? 0 : '100%',
    zIndex: -1,
    left: 0,
    right: 0,
    margin: '0 auto',
    transition: 'width 0.25s',
    borderRadius: '100px',
  },
}));

interface MenuCatsProps {
  isFixed: boolean;
}

export const MenuCatsStyled = styled('div')<MenuCatsProps>(({ isFixed, theme }) => ({
  position: 'absolute',
  top: isFixed ? 69 : 50,
  left: 0,
  width: '100%',
  backgroundColor: theme.palette.background.default,
  padding: '30px 0 40px',
  zIndex: 7,
  boxShadow: theme.shadows[3],

  [theme.breakpoints.down('lg')]: {
    top: isFixed ? 51 : 38,
  },
}));

export const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    listItem: {
      height: '100%',
    },

    menu_cats_container: {
      display: 'flex',
      width: '100%',
      height: '100%',
      maxWidth: GENERAL.CONTENT_MAX_WIDTH,
      margin: '0 auto',
      padding: `0 ${GENERAL.CONTENT_PADDING_X}`,
    },

    menu_cats_content: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      alignItems: 'start',
      rowGap: '40px',
    },

    menu_cats_links: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
    },

    menu_cats_sizes: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 57px)',
      gridAutoRows: '30px',
      gap: '4px 2.5px',
    },

    title: {
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
    },

    titleImgContainer: {
      maxWidth: '60px',
      height: '23px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: isLight ? theme.palette.grey[300] : theme.palette.grey[700],
      borderRadius: '4px',
      padding: '4px',
    },

    titleImg: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },

    sizeItem: {
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: '2px',

      '&:hover': {
        border: `1px solid ${theme.palette.primary.main}`,
      },
    },

    sizeLink: {
      width: '100%',
      height: '100%',
    },

    sizeText: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
  };
});
