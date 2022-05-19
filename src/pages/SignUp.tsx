/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-autofocus */
import { Login } from '@mui/icons-material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AuthButton from 'components/elements/AuthButton';
import Switch from 'components/elements/Switch';
import Copyright from 'components/widgets/Copyright';
import { useTheme } from 'core/hooks/useTheme';
import * as React from 'react';

const SignUp: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const { theme, changeTheme } = useTheme();

  /**
   * checked = true (Na direita) Dark | false (Na esquerda) Light
   */
  const [checked, setChecked] = React.useState<boolean>(() => {
    return theme == 'dark' ? true : false;
  });

  const changeThemeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    theme == 'dark' ? changeTheme('light') : changeTheme('dark');
  };

  return (
    <React.Fragment>
      <Container
        maxWidth="xl"
        sx={{
          margin: 0,
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Switch checked={checked} onChange={changeThemeHandle} />
      </Container>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
            <AuthButton
              type="submit"
              disabled={false}
              label="Cadastrar"
              icon={<Login />}
            />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Ja possui uma conta ? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright text="Seu Site" redirectUrl="https://mui.com" />
      </Container>
    </React.Fragment>
  );
};

export default SignUp;
