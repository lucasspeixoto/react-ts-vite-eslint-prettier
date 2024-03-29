/* eslint-disable jsx-a11y/anchor-is-valid */
import { Login } from '@mui/icons-material';
import HourglassTopTwoToneIcon from '@mui/icons-material/HourglassTopTwoTone';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AppButton from 'components/elements/AppButton';
import Switch from 'components/elements/Switch';
import Copyright from 'components/widgets/Copyright';
import { useTheme } from 'core/hooks/useTheme';
import { useToggle } from 'core/hooks/useToggle';
import React, { ChangeEvent, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const SignIn: React.FC = () => {
  const { theme, changeTheme } = useTheme();

  const [checked, setChecked] = useToggle(theme === 'dark' ? true : false);

  const [isLoadingButton, setIsLoadingButton] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    setIsLoadingButton(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    setTimeout(() => {
      setIsLoadingButton(false);
    }, 1500);
  };

  // eslint-disable-next-line no-unused-vars
  const handleChangeTheme = (event: ChangeEvent<HTMLInputElement>) => {
    //event.preventDefault();
    setChecked();
    theme == 'dark' ? changeTheme('light') : changeTheme('dark');
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <Switch checked={checked} onChange={handleChangeTheme} />
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Lembrar"
              />
              <AppButton
                type="submit"
                disabled={isLoadingButton}
                label={isLoadingButton ? 'Loading ...' : 'Entrar'}
                icon={isLoadingButton ? <HourglassTopTwoToneIcon /> : <Login />}
              />
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Esqueceu a senha?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {'Não Possui conta? Cadastre-se'}
                  </Link>
                </Grid>
              </Grid>
              <Copyright text="Seu Site" redirectUrl="https://mui.com" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SignIn;
