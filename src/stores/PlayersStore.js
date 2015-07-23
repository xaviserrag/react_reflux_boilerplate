'use strict';
import Reflux from 'reflux';
import PlayerActions from '../actions/PlayersActions';
/**
 * Store handles all logic related to Todo Data.
 * Such as adding, removing, and toggling of one or multiple Todos
 *
 * The store listens to actions triggered by TodoActions
 */
const PlayersStore = Reflux.createStore({
    listenables: [PlayerActions],

    addPlayer: function (data) {
        this.players.push({name: data, score: 0});
        this.trigger(this.players);
    },

    incrementScore: function (player) {
        player.score++;
        this.trigger(this.players);
    },

    getInitialState: function () {
        this.players = [
            {name: 'Carles', score: 0},
            {name: 'Xavi', score: 0},
            {name: 'Tomás', score: 0},
            {name: 'Adri', score: 0}
        ];
        return this.players;
    }
});

export default PlayersStore;

