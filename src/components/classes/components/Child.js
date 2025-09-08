import { Component } from 'react'


export class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Biba',
            count: 0
        }
    }

    componentDidMount() {
        console.log('Child Did Mount');
    }

    componentDidUpdate() {
        console.log('Child Did Update');
    }

    componentWillUnmount() {
        console.log('Child Did Unmount');
    }


    render() {
        return (
            <>
                <h2>Child Component</h2>
                <p>{this.state.count}</p>
                <button >Click</button>
            </>
        )
    }
}