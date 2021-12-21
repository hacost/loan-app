import React, { useState } from 'react';
import '../assets/styles/commons/Common.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import CartTranslate from '../modules/Common';
import { loginRequest } from '../actions/App';
import Copyright from '../components/Copyright';
import useStyles from '../modules/MakeStylesMUI';
import Message from '../components/Message';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    // para no mandar los parametros por url
    event.preventDefault();
    //sent the data to action
    props.loginRequest(form);
    //redirect user to home
    props.history.push('/');
  };

  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Message typeMsg='warning' msg='Hi, this is Alert test' show={false} />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          {CartTranslate('app.signIn')}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label={CartTranslate('app.email')}
            name='email'
            autoComplete='email'
            autoFocus
            onChange={handleInput}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label={CartTranslate('app.password')}
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={handleInput}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label={CartTranslate('signIn.rememberMe')}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {CartTranslate('app.signIn')}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='/forgot' className='body2 underlineHover'>
                {CartTranslate('signIn.forgot')}
              </Link>
            </Grid>
            <Grid item>
              <Link to='/signup' className='body2 underlineHover'>
                {CartTranslate('app.signUp')}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );

};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
