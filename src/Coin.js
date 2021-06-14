import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    render() {
        return (
            <div className="Coin">
                <img alt= {this.props.info.side} src={this.props.info.imgSrc}/>
            </div>
        )
    }
}

export default Coin;