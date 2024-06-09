import { useAppDispatch, useAppSelector } from '../../../app/redux/hooks/redux';
import { themeSlice } from '../../../app/redux/slices/themeSlice';

const { toggleThemeMode } = themeSlice.actions;

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const { themeMode } = useAppSelector((state) => state.themeReducer);

  const toggleTheme = () => {
    dispatch(toggleThemeMode());
  };

  const isLight = themeMode === 'light';

  return { themeMode, isLight, toggleTheme };
};
