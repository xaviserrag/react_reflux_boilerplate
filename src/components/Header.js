'use strict';

import React from 'react';
import PlayersActions from '../actions/PlayersActions';
import Reflux from 'reflux';

export default React.createClass({

    submitPlayerName() {
        let input = this.refs.playerName.getDOMNode();
        if (input.value) {
            PlayersActions.addPlayer(input.value);
            input.value = '';
        }
    },

    render() {
        return (
            <div className="header">
                <input type="text" ref="playerName" placeholder="Type your name"/>
                <button type="button" onClick={this.submitPlayerName}>+</button>
            </div>
        );
    }
});
