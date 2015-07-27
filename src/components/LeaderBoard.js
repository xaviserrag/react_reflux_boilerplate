'use strict';

import React from 'react';
import BoardItem from '../components/BoardItem.js';

export default React.createClass({

    //We define the propTypes for improve reusability
    propTypes: {
        players: React.PropTypes.array
    },
    getItems: function () {
        let items = [],
            i, len = this.props.players.length;

        for (i = 0; i < len; i++) {
            items.push(<BoardItem key={this.props.players[i].name} player={this.props.players[i]}/>);
        }
        return items;
    },

    render() {
        console.log(this.props);
        return (
            <ul className="clickableArea">
                {this.getItems()}
            </ul>
        );
    }
});