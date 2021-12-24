import React, { Component } from 'react'
import UpdateComponet from './withCounter'


export class CounterHover extends Component {


    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.incrementCount}>You Hovered {this.props.count} times!  </h1>
            </div>
        )
    }
}

export default UpdateComponet(CounterHover)






// const NewComponent = HOC( originalComponent   )

// const EnhancedComponent = HOC( originalComponent  )


// const chitti =  Programmed(  Rajinikanth  )


// const IronMan = bodyDouble(tonyStark)