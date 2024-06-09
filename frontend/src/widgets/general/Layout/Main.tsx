import { Box, BoxProps } from '@mui/material';
import { GENERAL } from '../../../app/config';

// ----------------------------------------------------------------------

export default function Main({ children, sx, ...other }: BoxProps) {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        px: GENERAL.CONTENT_PADDING_X,
        width: '100%',
        maxWidth: GENERAL.CONTENT_MAX_WIDTH,
        margin: '0 auto',
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
