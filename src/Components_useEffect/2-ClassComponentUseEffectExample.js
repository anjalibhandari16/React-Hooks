import React, { Component } from 'react'

class ClassComponentUseEffectExample extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    handleClick=()=>{
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
    }

    componentDidMount(){
        document.title=`Clicked ${this.state.count} Times`
    }

    componentDidUpdate(){
        document.title=`Clicked ${this.state.count} Times`
    }

  render() {
    const {count} = this.state
    return (
      <button onClick={this.handleClick}>Clicked {count} Times</button>
    )
  }
}

export default ClassComponentUseEffectExample