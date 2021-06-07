// useRef

import axios from 'axios';
import React, {useState,useRef} from 'react';


export const SignUp = () => {

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
      <h2>ユーザー新規登録</h2>
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








// useReducer

// import React, { useReducer } from 'react';

// function reducer(state, action) {
//   switch (action.type) {
//     case 'TITLE':
//       return { title: state.title = 'タイトル' };
//     case 'CAPTION':
//       return { caption: state.caption = '説明' };
//     case 'DATE':
//       return { date: state.date = '2020/06/01' };
//     default:
//       return state;
//   }
// }

// const Counter = ({ dispatch }) => {
//   return (
//     <>
//     <p>title</p>
//       <input onChange={() => dispatch({ type: 'TITLE' })}/>
//     <p>caption</p>
//       <input onChange={() => dispatch({ type: 'CAPTION' })}/>
//     <p>date</p>
//       <input onChange={() => dispatch({ type: 'DATE' })}/>
//     </>
//   );
// };

// export const PostForm = () =>{

//   const [state, dispatch] = useReducer(reducer, { title: null, caption: null,date: null });

//   return (
//     <>
//       <p>Count: {state.count}</p>
//       <p>Count: {state.caption}</p>
//       <p>Count: {state.date}</p>
//       <Counter dispatch={dispatch} />
//     </>
//   );
//   }
