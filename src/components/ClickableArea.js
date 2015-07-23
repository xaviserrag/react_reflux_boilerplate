'use strict';

import React from 'react';
import PlayerEntity from '../components/PlayerEntity.js';

export default React.createClass({
    //We define the propTypes for improve reusability
    propTypes: {
        players: React.PropTypes.array
    },
    getEntities: function () {
        let entities = [],
            i, len = this.props.players.length;

        for (i = 0; i < len; i++) {
            entities.push(<PlayerEntity key={this.props.players[i].name} player={this.props.players[i]}/>);
        }
        return entities;
    },

    render() {
        return (
            <ul className="clickableArea">
                {this.getEntities()}
            </ul>
        );
    }
});
