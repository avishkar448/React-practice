import React, { Component } from 'react'

export class MySt extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Myname:"Abhay"
      }
    }
        
    setChanges=()=>{ 
        this.setState({Myname:"Avishkar"})
    }
    
  render() {
    return (
      <div>
        <h1>Hello!! {this.state.Myname}</h1>
        <button onClick={this.setChanges}>click</button>
      </div>
    )
  }
}

export default MySt
