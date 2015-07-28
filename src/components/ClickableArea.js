'use strict';

import React from 'react';
import PlayerItem from '../components/PlayerItem.js';

export default React.createClass({

    propTypes: {
        players: React.PropTypes.array
    },

    getItems: function () {
        let items = [],
            i, len = this.props.players.length;

        for (i = 0; i < len; i++) {
            items.push(<PlayerItem key={i} name={this.props.players[i].name} index={i}/>);
        }

        this.counter++;
        return items;
    },

    render() {
        return (
            <div className="col-md-6">
                {this.getItems()}
            </div>
        );
    }
})
;
