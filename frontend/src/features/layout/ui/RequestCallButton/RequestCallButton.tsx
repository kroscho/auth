import { FC, Fragment, useState } from 'react';
import { Box, Button, IconButton, Link, Modal, TextField, Typography } from '@mui/material';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { useStyles } from './styles';

type Fields = 'name' | 'phone';

export const RequestCallButton: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');
  const [fieldsError, setFieldsError] = useState<Fields[]>([]);

  const handleClose = () => {
    setName('');
    setPhone('');
    setQuestion('');
    setFieldsError([]);
    setOpen(false);
  };

  const onSend = (e: any) => {
    e.preventDefault();
    const fields: Fields[] = [];
    if (!name && !fieldsError.includes('name')) fields.push('name');
    if (!phone && !fieldsError.includes('phone')) fields.push('phone');
    if (fields.length > 0) setFieldsError(fields);
    else handleClose();
  };

  return (
    <Fragment>
      <Button variant="text" color="inherit" size="medium" onClick={() => setOpen(true)}>
        Заказать звонок
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box component={'form'} onSubmit={onSend} className={classes.modal}>
          <Box className={classes.header}>
            <Typography variant="h2" className={classes.title}>
              Заказать звонок
            </Typography>
            <IconButton color="inherit" className={classes.close} onClick={handleClose}>
              <CloseOutlinedIcon />
            </IconButton>
          </Box>
          <Box className={classes.form}>
            <TextField
              variant="outlined"
              label="Ваше имя"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setFieldsError([]);
              }}
              fullWidth
              size="small"
              error={fieldsError.includes('name')}
              required
            />
            <TextField
              variant="outlined"
              label="Телефон"
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setFieldsError([]);
              }}
              fullWidth
              size="small"
              error={fieldsError.includes('phone')}
              helperText={fieldsError.includes('phone') ? 'Заполните поле' : undefined}
              required
            />
            <TextField
              variant="outlined"
              label="Ваш вопрос"
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
                setFieldsError([]);
              }}
              fullWidth
              size="small"
              multiline
              rows={3}
            />
            <Button variant="contained" fullWidth type="submit">
              Отправить
            </Button>
            <Typography variant="caption" className={classes.helpText}>
              {`Нажимая на кнопку "Отправить", ты
            соглашаешься с нашими`}{' '}
              <Link href="https://google.com" underline="always" color="primary.main" target="_blank" rel="noopener">
                Условиями
              </Link>
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Fragment>
  );
};
