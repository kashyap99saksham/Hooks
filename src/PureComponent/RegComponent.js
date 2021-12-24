import React, { Component } from 'react'

class RegComponent extends Component {
    render() {
        console.log("Reg. comp. called !");
        return (
            <div>
                This is a Regular {this.props.fruit}
            </div>
        )
    }
}

export default RegComponent
