import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import newsdata from './news.json';
import Login from './Login';
import Register from './Register';

// ============= Login Body ===============

class NewsCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { expanded: false }
    this.extendContent = this.extendContent.bind(this);
  }

  extendContent() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <div className='card m-2 p-0'>
        <div className="card-body">
        <h5 className='card-title'>{this.props.title}</h5>
        <p className='card-text'>{this.props.description}</p>
        <p className='card-text'>{this.state.expanded ?this.props.content :null}</p>
        <button className='btn btn-primary' onClick={this.extendContent}>{this.state.expanded?"Collapse":"Expand"}</button>
        </div>
      </div>
    )
  }
}

class LoginBody extends React.Component {
  render() {
    return (
      <div className='row'>
        {
          newsdata.body.map(
            element => <NewsCard
              title={element.title}
              description={element.description}
              content={element.content}
            />
          )
        }

      </div>
    )
  }
}

// ============= Not Login ===============
class NotLoginBody extends React.Component {
  render() {
    return (
      <h2 className="loggedoout">
        <center>
          Please <Link to={'/login'}>Login</Link> to Continue
        </center>
      </h2>
    )
  }
}

// class NavigatorTop extends React.Component {

  

//   render() {
//     return (
     
//     )
//   }
// }

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      loggingMessage: "Login"
    }
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin() {
    if (this.state.isLoggedIn){
      this.setState({
        loggingMessage: "Logging Out Please Wait"
      });
  
      setTimeout(() => this.setState({
        loggingMessage: "Login",
        isLoggedIn: !this.state.isLoggedIn
      }), 1500);
    }
    else{
      this.setState({
        loggingMessage: "Logging In Please Wait"
      });
  
      setTimeout(() => this.setState({
        loggingMessage: "Logout",
        isLoggedIn: !this.state.isLoggedIn
      }), 1500);
    }
    
  }
  render() {
    return (

      

      <div className="container">
         <div>
        <header><nav className='nav justify-content-end'>
          <button className={"btn m-2 " + (this.state.isLoggedIn?"btn-secondary":"btn-primary")}
            onClick={this.toggleLogin}>
            {this.state.loggingMessage}
          </button>
        </nav></header>
      </div>
        <Router>
          <Switch>
            <Route exact path='/'>
            {
            this.state.isLoggedIn ?
              <LoginBody /> :
              <Login loginFunc={this.toggleLogin} />
          }
            </Route>
            <Route path='/register'>
              <Register />
              </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
