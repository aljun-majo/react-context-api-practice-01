import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Context API
import { Provider, Consumer } from './MyContext'

const LogButton = () => <LoginForm />;

class LoginForm extends Component {
  state ={};
  render() {
    return (
      <Consumer>
        {value => {

          //const { viewer, logIn, logOut } = value;
          const { viewer } = value.state;
          const { logIn, logOut } = value.actions;
          return viewer ? (
            <React.Fragment>
              <h3>Logged In As: {viewer}</h3>
              <button
                onClick={logOut}
              >Log out...</button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <input 
                placeholder="Enter here..."
                ref={ r => (this.inputRef = r) }
              />
              <button
                type="submit"
                onClick={
                  () => {logIn(this.inputRef.value)}
                }
              >Log in</button>
            </React.Fragment>
          )

        }}
      </Consumer>
    )
  }
}

class App extends Component {
  // move into Context API Provider
  // state = {
  //   viewer: null
  // }

  // logIn = name => {
  //   this.setState({
  //     viewer: name
  //   });
  // }

  // logOut = () => this.setState({
  //   viewer: null
  // })

  render() {
    return (
      <Provider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Consumer>
              {({
                //viewer
                state: {viewer}
              }) => (
                <h2>
                  { viewer && `Howdy ${viewer}`  }
                </h2>
              )}
            </Consumer>
          </header>
          <div>
            <Consumer>
              {({

                //viewer
                state: {viewer}
              }) => (
                <h3>
                  { !viewer && 'Please enter your name...'  }
                </h3>
              )}
            </Consumer>
            <LogButton />
          </div>      
        </div>
      </Provider>
    );
  }
}

export default App;
