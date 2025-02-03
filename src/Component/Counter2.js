import React, { Component } from 'react'

export default class Counter2 extends Component {
    constructor(props){
        super(props)
        this.state = {count: 0}
    }
    increment = () => {
        this.setState((prevState)=>({
            count: prevState.count+1
        }))
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log(`Counter changed from ${prevState.count} to ${this.state.count}`)
        }
    }
  render() {
    return (
      <div>
        <p>Current Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
