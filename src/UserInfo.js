import React, { Component } from 'react';


class UserInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <img className="avatar" style={styles.imgStyle} src={
            this.props.user && this.props.user.image
              ? this.props.user.image[0].contentUrl
              : "/noprofilepicture.png"
          } />
        {this.props.user && this.props.user.name}
      </React.Fragment>
    )
  }
}
const styles = {
  imgStyle: {
    width: "50px",
    height: "50px",
    borderRadius: "128px",
    padding: '2px',
    float: 'right',
  }
}
export default UserInfo;
