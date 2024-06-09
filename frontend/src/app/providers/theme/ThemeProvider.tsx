import {
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
import { useMemo } from 'react';
import { useAppSelector } from '../../../app/redux/hooks/redux';
import { palette } from '../../../shared/mui/theme';
import typography from '../../../shared/mui/theme/typography';
import shadows from '../../../shared/mui/theme/shadows';
import ComponentsOverrides from '../../../shared/mui/theme/overrides';
import GlobalStyles from '../../../shared/mui/theme/globalStyles';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const { themeMode } = useAppSelector((state) => state.themeReducer);

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette(themeMode),
      typography: typography,
      shadows: shadows(themeMode),
    }),
    [themeMode],
  );

  const theme = createTheme(themeOptions);

  theme.components = ComponentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
