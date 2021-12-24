import React, { Component } from "react";

const UpdateComponet = ( OriginalComponent ) => {
    
    class NewComponent extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 counter:0
            }
        }
        
        incrementCount = () => {
            this.setState({
                counter:    this.state.counter+1
            })
        }
    


        render() {
            return <OriginalComponent count={this.state.counter} incrementCount={this.incrementCount} />
        }
    }

    return NewComponent;
}

export default UpdateComponet