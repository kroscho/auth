import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { MainSliderImagesPublic } from '../../../../app/config';

import { useResponsive } from '../../../../shared/lib/hooks';

import { useStyles } from './styles';

const images = [
  {
    desktop: MainSliderImagesPublic.Desktop_1,
    mobile: MainSliderImagesPublic.Mobile_1,
  },
  {
    desktop: MainSliderImagesPublic.Desktop_2,
    mobile: MainSliderImagesPublic.Mobile_2,
  },
  {
    desktop: MainSliderImagesPublic.Desktop_3,
    mobile: MainSliderImagesPublic.Mobile_3,
  },
];

export const MainSlider = () => {
  const classes = useStyles();
  const isDesktop = useResponsive('up', 436);

  return (
    <Box component="section" className={classes.container}>
      <Carousel
        indicators={false}
        animation="slide"
        interval={5000}
        autoPlay
        swipe
        navButtonsAlwaysVisible
        navButtonsProps={{ className: classes.navIcon }}
      >
        {images.map((image, i) => (
          <Box
            key={i}
            component="img"
            className={classes.image}
            src={isDesktop ? image.desktop : image.mobile}
            alt={`Slide ${i}`}
          />
        ))}
      </Carousel>
    </Box>
  );
};
