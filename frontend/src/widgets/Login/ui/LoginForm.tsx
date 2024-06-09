import { FC, useState } from 'react';
import styles from './LoginForm.module.scss';
import { TextField } from '@mui/material';
import { PasswordInput } from '../../../shared/ui/material/components/PasswordInput';

export const LoginForm: FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    console.log('LOGIN');
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <header className={styles.header}>
          {/* <Logo className={styles.logo} /> */}
          HEADER
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
          className={styles.form}
        >
          <TextField
            variant="outlined"
            label="Логин"
            fullWidth
            value={login}
            size="small"
            onChange={(e) => setLogin(e.target.value)}
          />
          <PasswordInput value={password} setValue={setPassword} />
          <button className={styles.button}>Войти</button>
        </form>
      </section>
    </div>
  );
};
