import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button' 
import axios from 'axios';
import React, {useState,useRef} from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    textAlign:'center'
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  button:{
    margin:'15px 0px'
  }
}));

export const DeviseSign = (props) => {

  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    confirmation: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const signInClick = () => {
    let data = {
      email: values.email,
      password: values.password,
      password_confirmation: values.confirmation
    }
    axios.post('http://localhost:3000/api/v1/auth/sign_in',data)
    .then(res => {
        let headers = 
        {
        headers:{
        'access-token': res.headers['access-token'],
        'client': res.headers['client'],
        'uid': res.headers['uid']
        }
      }
        localStorage.setItem("headerData", JSON.stringify(headers));
      })
    }

    const signUpClick = () =>{
        let data = {
          email: values.email,
          password: values.password,
          password_confirmation: values.confirmation
        }
        axios.post('http://localhost:3000/api/v1/auth/',data)
        .then(res => {
          window.alert('新規登録できました!!');
          window.location.href = '/sign_in';
        })
    }

  return (
    <div className={classes.root}>
      {
      props.match.path === '/sign_in'? (
        <h2>ユーザーログイン</h2>
        ) : (
          <h2>ユーザー登録</h2>
      )
        }
      <div>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel >メールアドレス</InputLabel>
          <OutlinedInput
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            labelWidth={70}
          />
          
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">パスワード</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">パスワード確認</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.confirmation}
            onChange={handleChange('confirmation')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        {
      props.match.path === '/sign_in'? (
        <Button className={classes.button}variant="contained" color="primary" size="large" onClick={signInClick}>ログイン</Button>
        ) : (
          <Button className={classes.button}variant="contained" color="primary" size="large" onClick={signUpClick}>新規登録</Button>
      )
      }
      </div>
      
    </div>

  );
}