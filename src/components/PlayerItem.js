'use strict';

import React from 'react';
import PlayersActions from '../actions/PlayersActions';
export default React.createClass({
    //We define the propTypes for improve reusability
    propTypes: {
        player: React.PropTypes.object
    },

    incrementScore: function () {
        PlayersActions.incrementScore(this.props.index);
    },

    render() {
        return (
            <li>
                <span className="entity-name">{this.props.player.name}</span>
                <button className="entity-button" type="button" onClick={this.incrementScore}>
                    +
                </button>
            </li>
        );
    }
});