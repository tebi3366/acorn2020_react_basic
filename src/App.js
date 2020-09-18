import React, { Component } from 'react';
//이미지경로를 improt 해서 사용한다.
import logo from './logo.svg';
import kim from './images/kim1.png';
//css 파일을 import 만 해도 css 가 자동 적용된다.
import './css/bootstrap.css';
import './App.css';

//class 표현식으로 App 구성하기
class App extends Component{
  //App.js 를 이용해서 화면 구성을 할때 호출되는 메소드
  render() {
    const myName="김구라";
    return(
      <div className="container">
        {/* class 는 예약어 임으로 className을 사용한다. */}
        <h1>Hello React!</h1>
        <p>내이름 <strong>{myName}</strong></p>
        <img src={logo} alt="react js 로고 입니다"/>
        <img src={kim} alt="김구라 이미지"/>
      </div>
    );
  }
}
export default App;
