import React from 'react';
//import { render } from 'react-dom';
import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends React.Component {


  // constructor() {
  //   super();
  //   this.state = {
  //     user : {
  //       name : "anna",
  //       hobbies: ["Sports ", "Sucking ", "Jumping "]
  //     }
  //   }
  // }

  constructor () {
    super();
    this.state = {
      homeLink: "Header"
    }
  }


  changeLink (newLink) {
    this.setState({
      homeLink: newLink
    })
  }



  onGreet() {
    alert("greeeety")
  }


  render() {

    // let user = {
    //  name: "Annna",
    //  hobbies: ["Sports"]
    // }

   

    return (
      <div className = "container ">
        <div className = "row">
          <div className = "col-xs-10 col-xs-offset-1">
            <Header homeLink = {this.state.homeLink}/>
          </div>
        </div>

        <div className = "row">
          <div className="col-xs-10 col-xs-offset-1">
              <Home 
                  name = {"Dzo"}
                  initialAge ={25}  
                  greet = {this.onGreet}
                  changeLink = {this.changeLink.bind(this)}
                  homeLink = {this.state.homeLink}
                  initialLinkName = {this.state.homeLink}

                >

              <h3><strong>TEKST PASS U COMPON ZA CHILDR</strong></h3>

              </Home>
           
             
                      
        </div>
        </div>
      </div>
    )
  }
}





//render( <App/>, document.getElementById('root'));





export default App;