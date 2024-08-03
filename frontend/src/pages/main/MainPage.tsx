import { Box } from '@mui/material';
import { FC } from 'react';
import { MainBrands, MainNewProducts, MainPopularCategories, MainSlider } from '../../widgets/main/ui';

const MainPage: FC = () => {
  return (
    <Box>
      <MainSlider></MainSlider>
      <MainBrands></MainBrands>
      <MainPopularCategories></MainPopularCategories>
      <MainNewProducts></MainNewProducts>
      {/* <MainBlog></MainBlog>
      <MainAbout></MainAbout> */}
    </Box>
  );
};

export default MainPage;
