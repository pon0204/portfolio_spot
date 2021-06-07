
// useRef

import axios from 'axios';
import React, {useState,useRef} from 'react';


export const SignIn = () => {

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
    console.log(data)
    axios.post('http://localhost:3000/api/v1/auth',data)
    
  }

  return (
    <>
      {/* <p>{PostData.title}</p>
      <p>{PostData.caption}</p>
      <p>{PostData.date}</p> */}
  <input value={inputEmail} onChange={emailChange} />
  <input value={inputPassword} onChange={passwordChange} />
  <input value={inputConfirmation} onChange={confirmationChange} />

      {/* <button onClick={handleClick}>set text</button> */}
      <button onClick={signInClick}>ユーザーログイン</button>
      {/* <button onClick={useLoginClick}>ユーザーログイン</button> */}
      {/* <button onClick={useInfoClick}>ユーザー情報</button> */}
    </>
  )
}
export const SignIn = () => {

  const [inputEmail, setEmail] = useState('');
  const [inputPassword, setPassword] = useState('');
  const [inputConfirmation, setConfirmation] = useState('');

  const emailChange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);
  const confirmationChange = (e) => setConfirmation(e.target.value);


  const signUpClick = () => {
    let data = {
      email: inputEmail,
      password: inputPassword,
      password_confirmation: inputConfirmation
    }
    console.log(data)
    axios.post('http://localhost:3000/api/v1/auth',data)
  }

  return (
    <>
      {/* <p>{PostData.title}</p>
      <p>{PostData.caption}</p>
      <p>{PostData.date}</p> */}
  <input value={inputEmail} onChange={emailChange} />
  <input value={inputPassword} onChange={passwordChange} />
  <input value={inputConfirmation} onChange={confirmationChange} />

      {/* <button onClick={handleClick}>set text</button> */}
      <button onClick={signUpClick}>ユーザー登録</button>
      {/* <button onClick={useLoginClick}>ユーザーログイン</button> */}
      {/* <button onClick={useInfoClick}>ユーザー情報</button> */}
    </>
  )
}