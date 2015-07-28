'use strict';

import React from 'react';
import BoardItem from '../components/BoardItem.js';

export default React.createClass({

    //We define the propTypes for improve reusability
    propTypes: {
        players: React.PropTypes.array
    },

    /**
     * That function parses all the players data. On each loop push a component to an array. Used by render to feed our list.
     * @returns {Array} Component List
     */
    getItems: function () {
        let items = [],
            i, len = this.props.players.length;

        for (i = 0; i < len; i++) {
            items.push(<BoardItem key={this.props.players[i].name} player={this.props.players[i]}/>);
        }

        return items;
    },

    render() {
        return (
            <div className="col-md-6">
                {this.getItems()}
            </div>
        );
    }
});
