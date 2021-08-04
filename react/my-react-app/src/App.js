import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
  let [number, numberUp] = useState(0);

  function numberPlus(){
    numberUp(number+1);
  }

  return (
    <div className="App">
      <header id="header">
        <div id="logo">
          <a href="#">
            <img src={logo} alt="logo"></img>
          </a>
        </div>
        <nav id="nav-bar">
          <a href="#" className="nav-menu">메뉴1</a>
          <a href="#" className="nav-menu">메뉴2</a>
          <a href="#" className="nav-menu">메뉴3</a>
          <a href="#" className="nav-menu">메뉴4</a>
        </nav>
        <div id="other">
          기타영역
        </div>
      </header><br/>
      {number} <button onClick={numberPlus}>버튼</button><hr/>
      
    </div>
  );
}

export default App;
