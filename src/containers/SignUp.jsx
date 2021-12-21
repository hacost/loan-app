import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/containers/SignUp.scss';
import '../assets/styles/commons/Common.scss';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { signUpRequest } from '../actions/App';
import CartTranslate from '../modules/Common';
import Copyright from '../components/Copyright';
import useStyles from '../modules/MakeStylesMUI';
import Message from '../components/Message';

const SignUp = (props) => {
  const classes = useStyles();
  const [form, setValues] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [even.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.signUpRequest(form);
    props.history.push('/');
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Message typeMsg='error' msg='Hi, this is Alert test' show={true} />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          {CartTranslate('signUp.signUp')}
        </Typography>
        <Typography variant='body2' color='textSecondary' align='left'>
          {CartTranslate('signUp.quick')}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label={CartTranslate('app.firstName')}
                autoFocus
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label={CartTranslate('app.lastName')}
                name='lastName'
                autoComplete='lname'
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label={CartTranslate('app.email')}
                name='email'
                autoComplete='email'
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='whatsApp'
                label={CartTranslate('app.whatsApp')}
                name='whatsApp'
                autoComplete='tel-national'
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label={CartTranslate('app.password')}
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='confirmPassword'
                label={CartTranslate('app.confirmPassword')}
                type='password'
                id='confirmPassword'
                autoComplete='current-password'
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='caption' color='textSecondary' align='left'>
                {CartTranslate('signUp.agree')}
              </Typography>
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {CartTranslate('signUp.signUp')}
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link to='/login' className='body2 underlineHover'>
                {CartTranslate('signUp.haveAccount')}
                {' '}
                {CartTranslate('app.signIn')}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

const mapDispatchToProps = {
  signUpRequest,
};

export default connect(null, mapDispatchToProps)(SignUp);
