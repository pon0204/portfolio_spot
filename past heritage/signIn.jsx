
// useRef

import axios from 'axios';
import React, {useState,useRef} from 'react';
import { TextField } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

export const SignIn = () => {

  // const [headerData,setHeader] = useState([])
  const [inputEmail, setEmail] = useState('');
  const [inputPassword, setPassword] = useState('');
  const [inputConfirmation, setConfirmation] = useState('');

  const emailChange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);
  const confirmationChange = (e) => setConfirmation(e.target.value);


  const signInClick = () => {
    let data = {
      email: inputEmail,
      password: inputPassword,
      password_confirmation: inputConfirmation
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

    
    const userInfoClick = () =>{
    let headerData = JSON.parse(localStorage.getItem('headerData'))
    axios.get('http://localhost:3000/api/v1/whoami',headerData)
    .then((res) =>{
      console.log(res)
    })
  }
  

  
  return (
    <>
      {/* <p>{PostData.title}</p>
      <p>{PostData.caption}</p>
      <p>{PostData.date}</p> */}
      <h2>ユーザーログイン</h2>
      <TextField
      label='メールアドレス'
      onChange={emailChange}
      variant='outlined'
      />
      <TextField
      label='パスワード'
      onChange={passwordChange}
      variant='outlined'
      />
      <TextField
      label='パスワード確認'
      onChange={confirmationChange}
      variant='outlined'
      />


      {/* <button onClick={handleClick}>set text</button> */}
      <button onClick={signInClick}>ユーザーログイン</button>
      <button onClick={userInfoClick}>ユーザー情報を返す</button>
      {/* <button onClick={useLoginClick}>ユーザーログイン</button> */}
      {/* <button onClick={useInfoClick}>ユーザー情報</button> */}
    </>
  )
}