import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from '../UserInfo';
const blockstack = require('blockstack');



class Home extends React.Component {
    constructor(props) {
        super(props);
        
        let isSignedIn = this.checkSignedInStatus();

        this.state = {
          isSignedIn,
          person: undefined
        }
    
        if(isSignedIn) {
          this.loadPerson();
        }

        this.handleSignOut = this.handleSignOut.bind(this)

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
        })
    }

    handleSignOut(event) {
        event.preventDefault();
        blockstack.signUserOut('/')
    }
    


    render() {
        return (
            <div>
            <UserInfo user={this.state.person} />
            <button onClick={this.handleSignOut}>
                Sign-out
            </button>
            </div>
        );
    }
}


Home.propTypes = {
    
};

export default Home
