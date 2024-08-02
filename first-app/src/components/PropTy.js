import React, { Component } from 'react'
import PropType from 'prop-types'

export class PropTy extends Component {
  render() {
    return (
      <div>
        <h2>Hello! I am {this.props.name} </h2>
        <h2>I am {this.props.course}</h2>
      </div>
    )
  }
}

PropTy.propTypes={ 
    name:PropType.string,
    course:PropType.string
}

PropTy.defaultProps={ 
    name:"John",
    course:"ITI"
}

export default PropTy
