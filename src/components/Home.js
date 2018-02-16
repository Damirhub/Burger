import React from "react";


export class Home extends React.Component {

constructor(props) {
  super()
  this.state = {
    age: props.initialAge,
    status: 0,
    changed: "Changed!!!"
  }
}

  onMakeOlder(props) {
    this.setState  ({
    age: this.state.age +1 
  })
  }

  // onChangeLink(){
  //   if ( this.props.homeLink === "Header"){
  //   this.props.changeLink(this.state.homemeLink)
  //   }
  //   else{
  //     this.props.changeLink("Header")
  //   }
  // }

  onChangeLink() {
    if(this.props.homeLink === "Header"){
    this.props.changeLink(this.state.changed)
    }
    else
    {
      this.props.changeLink("Header")
    }  
  }


  onHandleChange(event) {
    this.setState({
      changed : event.target.value
    })
    
  }
  
  render() {
    console.log(this.props.changeLink)
    
    let text = "something";
      return(
     <div>
       <p>iz var {text}</p>

       <h1>{this.props.name}, age is: {this.state.age}</h1>
        <hr />
        
        <button className = "btn btn-primary" onClick = { () => this.onMakeOlder() }>Make me older! </button>
          <hr />
        <button className = "btn btn-primary" onClick = { () => this.props.greet() }>greet </button>
        <hr />
        <input type = "text" value = {this.props.changed} 
        // onChange = {this.onHandleChange.bind(this)}
        onChange = {(event) => this.onHandleChange(event)}
        
        />

                <button className = "btn btn-danger" onClick = {this.onChangeLink.bind(this)}>Change it!</button>
        </div>
      
              
      )
  }



}

