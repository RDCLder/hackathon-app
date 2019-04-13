import React, { Component } from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <img className="avatar" src={
            this.props.user && this.props.user.image
              ? this.props.user.image[0].contentUrl
              : "/noprofilepicture.png"
          } />
        {this.props.user && this.props.user.name}
      </React.Fragment>
    )
  }
}

export default UserInfo;
