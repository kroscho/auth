import { FC } from 'react';
import { Link, Stack, Typography } from '@mui/material';

export const ContactsBlock: FC<{ RequestCallButton: FC }> = ({ RequestCallButton }) => {
  return (
    <Stack direction="column" gap="5px" padding="20px 14px" alignItems="start">
      <Link href="tel:88008008888" color="inherit">
        <Typography fontSize={14} fontWeight="bold">
          8800 800 88-88
        </Typography>
      </Link>
      <RequestCallButton />

      <Link href="mailto:nike04@mail.ru" color="inherit" mt={2}>
        <Typography fontSize={14} fontWeight={400} textTransform="uppercase">
          nike04@mail.ru
        </Typography>
      </Link>
    </Stack>
  );
};
