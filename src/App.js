import React, {Component} from 'react'
export default class App extends Component {
  text = (x) => {
    return <h1> Hello {x}</h1>
  }
  state={
    count:2 
  }
  mult = () =>{
    this.setState({
      count: this.state.count * 2
    })
  }
  div = () =>{
    this.setState({
      count: this.state.count / 2
    })
  }
  render(){
    return(
      <div>
        <h1>{this.text("Walter")}</h1>
        <h2>{this.state.count}</h2>
      <button onClick={this.mult}>*</button>
      <button onClick={this.div}>/</button>
      </div>
    )
  }
}