import React from 'react';
//이미지경로를 improt 해서 사용한다.
import logo from './logo.svg';
//css 파일을 import 만 해도 css 가 자동 적용된다.
import './App.css';

function App() {
  const myName="김구라";
  return (
    <div>
      <h1>Hello React!</h1>
      <p>내이름 <strong>{myName}</strong></p>
      <img src={logo} alt=""/>
    </div>
  );
}

export default App;
