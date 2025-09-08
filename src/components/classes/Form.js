import React, { Component } from "react";
import { Child } from "./components/Child";

export class Form extends Component {

    state = {
        name: 'Biba',
        count: 0,
        show: true
    }

    handleChange = (event) => {
        // console.log(this)
        this.setState({name: event.target.value})
    }

    handeleClick = (event) => {
        this.setState({count: this.state.count + 1})
    }

    handeleShow = () => {
        this.setState({show: !this.state.show})
    }

    componentDidMount() {
        console.log('Form did mount')
    }
    

    render() {

        return (
            <>
                <h1>Classe Components</h1>
                {/* <h2> Name: {this.state.name}</h2>
                <input type="text" onChange={this.handleChange} />
                <p>COUNT: {this.state.count}</p> */}
                <button onClick={this.handeleShow}>Show</button>
                {this.state.show && <Child/>}
            </>

        )
    }
}