import React, { Component } from 'react'

export class TimerClassComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    componentDidMount(){
    //   this.interval = setInterval(this.tick(), 1000);
    setInterval(
        () => {
            this.setState({
                count: this.state.count +1
            })
        }
        , 1000);

    }
    


    // tick = () => {
    //     this.setState({
    //         count: this.state.count +1
    //     })
    // }

  render() {
    return (
      <h2>{this.state.count}</h2>
    )
  }
}

export default TimerClassComponent