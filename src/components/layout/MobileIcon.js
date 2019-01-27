import React, { Component } from 'react'

export class MobileIcon extends Component {

  render() {
    return (
        <div className={this.props.setStyle} onClick={this.props.click.bind(this)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
  }
}

export default MobileIcon
