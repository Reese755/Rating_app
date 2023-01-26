import * as React from "react";
import Button from '@mui/material/Button';
import CandyContainer from "./CandyContainer";
import Header from "./Header";

const myStyle = { 
  color: "orange",
  textAlign: "center"
}

function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2 style={myStyle}>Welcome To Reese's Pieces</h2>
      </div>
      <Header />
      <CandyContainer />
     
    </div>
  );
}

export default App;

