import React ,{Component} from "react"
import a from "./a.png";
import b from "./b.png";

 class NewComp extends Component{
    constructor(props){
        super(props);
        this.state={
            message:"Suscribe for more updates",
            sub:"suscribe",
            imageurl:a
        };
    }
    styles={
        fontstyle:"italic",
        color:"purple" 
      };
      Buttonchange = () => {
          this.setState({
              message:"Suscribed! Great move! Hit the bell icon",
              sub:"Suscribed"
          });
      };
      imagechange = () =>{
          this.setState({
              imageurl:b,
              message:"Well done!"
          });
      };
    render(){
        return(
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
                <p/>
                <img 
                style={{ width:"30px", height:"30px"}}
                src={this.state.imageurl}
                onClick={this.imagechange}
                alt="bellbutton"
                />
            </div>
        )
    }
}
export default NewComp