import { styled } from '@mui/material';

// ----------------------------------------------------------------------

const SectionStyled = styled('section')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '420px',
  height: '610px',
  marginTop: '60px',
  background: 'gray',
  margin: 'auto',
}));

// ----------------------------------------------------------------------

export const MainBlock = () => {
  return <SectionStyled></SectionStyled>;
};
