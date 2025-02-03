import React, { Component } from 'react'

export default class Logger extends Component {
    componentDidMount(){
        console.log('Component has been mounted')
    }
    componentWillUnmount(){
        console.log('Component is about to be unmounted')
    }
  render() {
    return (
      <div>
        <h1>This component logs to the console.</h1>
      </div>
    )
  }
}
