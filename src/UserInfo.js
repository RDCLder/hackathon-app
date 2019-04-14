import React, { Component } from 'react';

const imgStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "128px",
  // boxShadow: "3px 3px 7px #e5e5e5",
}
class UserInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <img className="avatar" style={imgStyle} src={
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
