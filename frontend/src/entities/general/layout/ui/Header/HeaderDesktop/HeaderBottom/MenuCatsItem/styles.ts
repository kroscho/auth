import { Theme, styled } from '@mui/material';
import { GENERAL } from '../../../../../../../../app/config';
import { makeStyles } from '@mui/styles';
import { Link as RouterLink } from 'react-router-dom';

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
  isSticky: boolean;
}

export const MenuCatsStyled = styled('div')<MenuCatsProps>(({ isSticky, theme }) => ({
  position: 'absolute',
  top: isSticky ? 69 : 50,
  left: 0,
  width: '100%',
  backgroundColor: theme.palette.background.default,
  padding: '30px 0 40px',
  zIndex: 7,
  boxShadow: theme.shadows[3],

  [theme.breakpoints.down('lg')]: {
    top: isSticky ? 51 : 38,
  },
}));

export const useStyles = makeStyles((theme: Theme) => {
  return {
    listItem: {
      height: '100%',
    },

    menu_cats_content: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      maxWidth: GENERAL.CONTENT_MAX_WIDTH,
      justifyContent: 'space-between',
      margin: '0 auto',
      padding: `0 ${GENERAL.CONTENT_PADDING_X}`,
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
