import './Card.css';
import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className='card'>
                <img src={this.props.avatar} width='65px' height='65px' alt='' ></img>
                <div className='card-body'>
                    <h2>{this.props.dis}</h2>
                    <h4>{this.props.name}</h4>
    
                    <div className='card-bar' >
                        <div className='card-bar card-bar-up ' style={{width:this.props.value_bar+'%'}}></div>
                    </div>
                    
                </div>
                <h4>{this.props.value_bar}</h4>
            </div>
        )
    }
}
