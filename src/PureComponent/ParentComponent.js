import React, { Component, PureComponent } from 'react'
import RegComponent from './RegComponent'
import PureCompo from './PureCompo'

class ParentComponent extends PureComponent{

    constructor(props) {
        super(props)
    
        this.state = {
             fruitName : 'Apple'
        }
    }
    componentDidMount() {
        setInterval( ()=>{
            this.setState({
                fruitName: 'Mango'
            })
        } , 3000 )
    }

    render() {
        console.log("Parent compo calledd!");
        return (
            <div>
                <h1>I m parent</h1>
                <RegComponent fruit={this.state.fruitName}/>
                <PureCompo fruit={this.state.fruitName}/>
            </div>
        )
    }
}

export default ParentComponent





