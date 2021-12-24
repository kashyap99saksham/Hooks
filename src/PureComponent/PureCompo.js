import React, { PureComponent } from 'react'

class PureCompo extends PureComponent {

    render() {
        console.log("Pure Comp called!!!");
        return (
            <div>
                This is my Pure {this.props.fruit}
            </div>
        )
    }
}

export default PureCompo
