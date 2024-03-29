/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-autofocus */
import HourglassTopTwoToneIcon from '@mui/icons-material/HourglassTopTwoTone';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Container, { ContainerProps } from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AppButton from 'components/elements/AppButton';
import Switch from 'components/elements/Switch';
import Copyright from 'components/widgets/Copyright';
import { useTheme } from 'core/hooks/useTheme';
import { useToggle } from 'core/hooks/useToggle';
import React, { ChangeEvent, useState } from 'react';
import { Helmet } from 'react-helmet-async';

//import LoginBackground from './../assets/login-background.png';

const BackgroundContainer = styled(Container)<ContainerProps>(() => ({
  backgroundImage: 'url(https://source.unsplash.com/random)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  minWidth: '100vw',
}));

const SignupContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3, 1),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.general.borderRadiusLg,
  boxShadow: theme.sidebar.boxShadow,
}));

const SignUp: React.FC = () => {
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

  const { theme, changeTheme } = useTheme();

  const [checked, setChecked] = useToggle(theme === 'dark' ? true : false);

  // eslint-disable-next-line no-unused-vars
  const handleChangeTheme = (event?: ChangeEvent<HTMLInputElement>) => {
    //event.preventDefault();
    setChecked();
    theme == 'dark' ? changeTheme('light') : changeTheme('dark');
  };

  return (
    <BackgroundContainer>
      <Helmet>
        <title>Cadastro</title>
      </Helmet>
      <Switch checked={checked} onChange={handleChangeTheme} />
      <SignupContainer maxWidth="sm">
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Cadastro
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Nome"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Sobrenome"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Quero receber notificações, promoções de marketing e atualizações por e-mail."
              />
            </Grid>
          </Grid>
          <AppButton
            type="submit"
            disabled={isLoadingButton}
            label={isLoadingButton ? 'Loading ...' : 'Cadastrar'}
            icon={isLoadingButton ? <HourglassTopTwoToneIcon /> : <PersonAddAlt1Icon />}
          />

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Ja possui uma conta ? Login
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Copyright text="Seu Site" redirectUrl="https://mui.com" />
      </SignupContainer>
    </BackgroundContainer>
  );
};

export default SignUp;
