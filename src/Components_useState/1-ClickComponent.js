import React, { Component } from 'react'

class ClickComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    clickHandle=()=>{
        this.setState(prevState=>{
            return {count:prevState.count +1}
        })
    }

  render() {
    const {count} =this.state;
    
    return (
      <button onClick={this.clickHandle}> Click {count}</button>
    )
  }
}

export default ClickComponent