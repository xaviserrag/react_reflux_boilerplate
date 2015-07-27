'use strict';

import React from 'react';
import Reflux from 'reflux';
import PlayerItem from '../components/PlayerItem.js';
import PlayersStore from '../stores/PlayersStore.js';

function getPlayers() {
    return {players: PlayersStore.getPlayers()};
}

export default React.createClass({
   mixins: [Reflux.ListenerMixin],

    //We define the propTypes for improve reusability
    propTypes: {
        players: React.PropTypes.array
    },

    componentDidMount: function () {
       this.listenTo(PlayersStore, this.refreshList);
    },

    getInitialState: function () {
        return getPlayers();
    },

    refreshList: function() {
        this.setState({
            players: PlayersStore.getPlayers()
        });
    },

    getItems: function () {
        let items = [],
            i, len = this.state.players.length;

        for (i = 0; i < len; i++) {
            items.push(<PlayerItem key={i} player={this.state.players[i]} index={i}/>);
        }

        this.counter++;
        return items;
    },

    render() {
        return (
            <ul className="clickableArea">
                {this.getItems()}
            </ul>
        );
    }
})
;
