import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => {
  return {
    categories: {
      display: 'grid',
      gridGap: '0.5em',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },

    cat_bigest: {
      width: 'unset',
      gridColumn: '4 span',
    },

    cat_big: {
      width: 'unset',
      gridColumn: '2 span',
    },

    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };
});
