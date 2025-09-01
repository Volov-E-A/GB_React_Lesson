import React, { Component } from "react";

export class Form extends Component {

    state = {
        name: 'Biba',
        count: 0
    }

    handleChange = (event) => {
        // console.log(this)
        this.setState({name: event.target.value})
    }

    handeleClick = (event) => {
        this.setState({count: this.state.count + 1})
    }

    render() {

        return (
            <>
                <h1>Classe Components</h1>
                <h2> Name: {this.state.name}</h2>
                <input type="text" onChange={this.handleChange} />
                <p>COUNT: {this.state.count}</p>
                <button onClick={this.handeleClick}>Click</button>
            </>

        )
    }
}