import React from "react"
import './App.css';
import NewComp from "./Components/NewComp"
class App extends React.Component{
  styles={
    fontstyle:"bold",
    color:"teal"
    
    
  };
  render(){
    return(
      <div classname="App">
        <center><h1 style={this.styles}>Welcome</h1></center>
        <NewComp/>
      </div>
    );
  }
}
export default App;


