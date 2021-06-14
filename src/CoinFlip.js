import React, { Component } from 'react';
import './CoinFlip.css';
import { choice } from './helpers';
import Coin from './Coin';

class CoinFlip extends Component {
    static defaultProps = {
        coins: [
            {side: "heads", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"},
            {side: "tails", imgSrc: "https://www.usmint.gov/wordpress/wp-content/uploads/2020/12/2021-kennedy-half-dollar-uncirculated-reverse-768x768.jpg"}
        ]
    }

    constructor(props) {
        super(props);
        this.state = { 
            curSide: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0 
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // flipCoin() {
    //     let num = Math.floor(Math.random() * 2);
    //     if (num === 1) {
    //         this.setState({ side: this.props.tailsImg })
    //     } else {
    //         this.setState({ side: this.props.headsImg })
    //     }
    // }

    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                curSide: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1: 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1: 0)
            }
        })
    }

    handleClick(e) {
        this.flipCoin();
    }

    render () {
        return (
            <div className="CoinFlip">
                <h2>Flip A Coin!</h2>
                {this.state.curSide && <Coin info={this.state.curSide} />}
                <button onClick={this.handleClick}>Try Your Luck!</button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails</p>
            </div>
        )
    }
}

export default CoinFlip;