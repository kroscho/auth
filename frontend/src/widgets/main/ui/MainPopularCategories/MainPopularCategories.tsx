import { FC } from 'react';
import { Box, Link } from '@mui/material';
import { BlockWrapper } from '../../../../entities/main/blockWrapper';
import { Link as RouterLink } from 'react-router-dom';

import { useStyles } from './styles';
import { PopularCategoriesItems } from '../../lib';

export const MainPopularCategories: FC = () => {
  const classes = useStyles();

  return (
    <BlockWrapper title="Популярные категории">
      <Box className={classes.categories}>
        {PopularCategoriesItems.map((cat) => {
          return (
            <Box key={cat.src} className={cat.type === 'big' ? classes.cat_bigest : classes.cat_big}>
              <Link component={RouterLink} to="/">
                <Box
                  component="img"
                  className={classes.image}
                  src={cat.src}
                  alt={`Popular category`}
                  draggable={false}
                />
              </Link>
            </Box>
          );
        })}
      </Box>
    </BlockWrapper>
  );
};
