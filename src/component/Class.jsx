import React, { Component } from 'react'

export default class Class extends Component {
    render() {
        return (
            <div className='card'>
                <h3>{this .props.text1}</h3>
                <p>{this. props.text2}</p>
            </div>
        )
    }
}
