import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export class Login extends Component {
  state = {
    credentials: { username: '', password: '' },
    loggedIn: false,
    message: '',

  };

  login = event => {
    event.preventDefault();
    console.log(this.state.credentials);
    var data = this.state.credentials

    // axios.post('http://localhost:8000/accounts/login/', data).then(
    //   res => {
    //     localStorage.setItem('token', res.data.tokens.access);

    //     localStorage.setItem('username', res.data.username);
    //     this.setState({
    //       loggedIn: true
    //     });
    //     this.props.setUser(res.data);

    //   }).catch(
    //     err => {

    //       this.setState({
    //         message: err.response.data.detail
    //       })
    //     },
    
    //   )
    this.props.loginFunc();
  };


  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to={'/'} />;
    }
    console.log(this.props)
    let error = '';
    if (this.state.message) {
      error = (
        <div class="alert alert-danger alert-dismissible" style={{ marginTop:'100px' }}>
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>{this.state.message}</strong>
        </div>
      )
    };
    return (
<div>
      <div class="row">

<div class="col">
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img src="https://www.thenation.com/wp-content/uploads/2018/07/daily-news-tronc-ap-img.jpg?scale=896&compress=80" alt='' width="100%" height='100%' style={{borderRadius:"8px",filter: 'blur(4px)'}}/>
          
          <div style={{position:"absolute", color:"white"}}>
            <center>
          <h2>News App</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
          </center>
          </div>
          </div>
        </div>
        <div class="col">
        <div className="header-text">
        </div>
        {error}
            <div style={{background:"#9152f8", borderRadius:"8px",padding:"12px"}}>
              <form className="validate-form" onSubmit={this.login}>
                <span className="login100-form-logo">
                  <i className="zmdi zmdi-landscape" />
                </span>
                <span className="login100-form-title p-b-34 p-t-27">
                  Login
                </span>
                <div className="wrap-input100 validate-input" data-validate="Enter username">
                  <input className="input100" type="text" name="username" placeholder="Username"
                    value={this.state.credentials.username}
                    onChange={this.inputChanged} />
                  <span className="focus-input100" data-placeholder="" />
                </div>

                <div className="wrap-input100 validate-input" data-validate="Enter password">
                  <input className="input100" type="password" name="password" placeholder="Password"
                    value={this.state.credentials.password}
                    onChange={this.inputChanged} />
                  <span className="focus-input100" data-placeholder="" />
                </div>

                <div className="container-login100-form-btn">
                  <button type="submit" className="login100-form-btn">
                    Login
                  </button>
                </div>
                <div className="text-center p-t-90">
                  <Link to={''}><a className="txt1" href="">
                    Forgot Password?
                  </a></Link>

                </div>
                <div className="text-center p-t-90">
                  <Link to={'/register'}><a className="txt1" href="">
                    Register
                  </a></Link>
                  
                </div>
              </form>
            </div>
          </div>

        

          </div>

          <div style={{width:"100%",height:"200px",background:"#b5e48c", marginTop:"18px", borderRadius:'8px'}}>

           
               <div style={{display:"flex",flexDirection:"row"}}>
                <img style={{margin:"50px"}} src='/news.svg' width='100px' height='100px' />
                <div style={{margin:"50px"}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            

          </div>

          <div style={{width:"100%",height:"200px",background:"#a0c4ff", marginTop:"18px", borderRadius:'8px'}}>

           
               <div style={{display:"flex",flexDirection:"row"}}>
                
                <div style={{margin:"50px"}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <img style={{margin:"50px"}} src='/news1.svg' width='100px' height='100px' />
              </div>
            

          </div>

          <div style={{width:"100%",height:"200px",background:"#ffc6ff", marginTop:"18px", borderRadius:'8px'}}>

           
<div style={{display:"flex",flexDirection:"row"}}>
 <img style={{margin:"50px"}} src='/news2.svg' width='100px' height='100px' />
 <div style={{margin:"50px"}}>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
 </div>
</div>


</div>


<hr style={{background:"white",height:"4px",borderRadius:"50%", marginTop:"32px",marginBottom:"12px"}} />
     <center> <p style={{color:"white"}}>© News App 2021</p> </center>

          </div>
    )
  }
}
export default Login;