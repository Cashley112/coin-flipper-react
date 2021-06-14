import React, { Component } from 'react'
import './CoinFlip.css'

class CoinFlip extends Component {
    static defaultProps = {
        headsImg: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg',
        tailsImg: 'https://www.usmint.gov/wordpress/wp-content/uploads/2020/12/2021-kennedy-half-dollar-uncirculated-reverse-768x768.jpg'
    }

    constructor(props) {
        super(props);
        this.state = { side: this.props.headsImg };
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        let num = Math.floor(Math.random() * 2);
        if (num === 1) {
            this.setState({ side: this.props.tailsImg })
        } else {
            this.setState({ side: this.props.headsImg })
        }
    }

    handleClick() {
        this.flipCoin();
    }

    render () {
        return (
            <div className="CoinFlip">
                <h1>Flip A Coin!</h1>
                <div className="CoinFlip-Coin">
                <img alt="coin" src={this.state.side} />
                </div>
                <button onClick={this.handleClick}>Try Your Luck</button>
            </div>
        )
    }
}

export default CoinFlip;