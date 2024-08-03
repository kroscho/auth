import { Box } from '@mui/material';
import { FC } from 'react';
import { MainSlider } from '../../widgets/main/ui';

const MainPage: FC = () => {
  return (
    <Box>
      <MainSlider></MainSlider>
      {/* <MainBrands></MainBrands>
      <MainPopularCats></MainPopularCats>
      <MainProducts></MainProducts>
      <MainBlog></MainBlog>
      <MainAbout></MainAbout> */}
    </Box>
  );
};

export default MainPage;
