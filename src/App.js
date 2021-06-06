import React, { Component } from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Home from './Home';
import Dashboard from './Dashboard';
import About_us from './About_us';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="item header margin-top-0">
            <div className="wrapper">
              <nav role="navigation" className="navbar navbar-white navbar-embossed navbar-lg navbar-fixed-top">
                <div className="container">
                  <div className="navbar-header">
                    <button data-target="#navbar-collapse-02" data-toggle="collapse" className="navbar-toggle" type="button">
                      <i className="fa fa-bars" />
                      <span className="sr-only">Toggle navigation</span>
                    </button>
                    <Link to="/" className="navbar-brand brand">
                      <img className="brand" src={require("./assets/images/logo.png").default} alt="" style={{ width: '120px', height: '50px' }} />
                    </Link>
                  </div>
                  <div id="navbar-collapse-02" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                      <li className="propClone">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="propClone">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="propClone">
                        <Link to="/about_us">About Us</Link>
                      </li>
                      {/* {/* <li className="propClone"><a href="product.html">Product</a></li> */}
                      {/* <li className="propClone"><a href="checkout.html">Checkout</a></li> */}
                    </ul>
                  </div>
                </div>
              </nav> 
            </div>
          </header>
          <switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/about_us" component={About_us} />
          </switch>
        </div>
      </Router>
    );
  }
}

export default App;
