import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Rooms from "./pages/rooms/rooms";
import Services from "./pages/services/services";
import News from "./pages/news/news";
import Contactus from "./pages/contactus/contactus";
// import AwesomeComponent from "./component/spinner/spinner";







class App extends Component {


  render(){

  return (

    <BrowserRouter>
        <div className="App">

        <Navbar />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/rooms" component={Rooms} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/contactus" component={Contactus} />
                </Switch>   

            
            {/* <AwesomeComponent /> */}
            </div>
    </BrowserRouter>
    
  );
  }
}

export default App;
