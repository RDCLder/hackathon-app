import React, { Component } from 'react';

import './App.css';

import UserInfo from './UserInfo';

import {Redirect} from 'react-router-dom'


const blockstack = require('blockstack');

class App extends Component {
  constructor(props) {
    super(props)

    let isSignedIn = this.checkSignedInStatus();

    this.state = {
      isSignedIn,
      person: undefined
    }

    if(isSignedIn) {
      this.loadPerson();
    }



    this.handleSignIn = this.handleSignIn.bind(this)
  }

  checkSignedInStatus() {
    if (blockstack.isUserSignedIn()) {
      return true;
    } else if (blockstack.isSignInPending()) {
      blockstack.handlePendingSignIn().then(function(userData) {
        window.location = window.location.origin
      })
      return false;
    }
  }

  loadPerson() {
    let username = blockstack.loadUserData().username

    blockstack.lookupProfile(username).then((person) => {
      this.setState({ person })
    }).then(window.location.href ='/home')
  }

  handleSignIn(event) {
    event.preventDefault();
    blockstack.redirectToSignIn()
  }


  render() {

    return (
      <div className="App" style = {styles.box}>
        <header className="App-header">
          <h1 className="App-title">Blockstack Create React App</h1>
        </header>
        <p>
          <button onClick={this.handleSignIn}>
            Sign-in with Blockstack
          </button>
        </p>
        
        {/* <p style={{display: !this.state.isSignedIn ? 'none' : 'block' }}>
          <UserInfo user={this.state.person} />
          <button onClick={this.handleSignOut}>
            Sign-out
          </button>
        </p> */}
      </div>
    )
  }
}

const styles = {
  box: {
    border: 'solid 1px black',
  }
}

export default App;
