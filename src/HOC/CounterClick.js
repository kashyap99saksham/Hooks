import React, { Component } from 'react'
import UpdateComponet from './withCounter'

export class CounterClick extends Component {


    render() {
        console.log(this.props);
        return (
            <div>
                <button onClick={this.props.incrementCount}>You Clicked {this.props.count} Times!</button>
            </div>
        )
    }
}

export default UpdateComponet(CounterClick)


