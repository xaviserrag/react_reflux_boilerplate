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

    players: {},

    getInitialState() {
        this.players.list = [
            {name: 'Carles'},
            {name: 'Xavi'},
            {name: 'Tomás'},
            {name: 'Adri'}
        ];
        this.players.leaderBoard = [
            {name: 'Carles', id: 0, score: 0},
            {name: 'Xavi', id: 1, score: 0},
            {name: 'Tomás', id: 2, score: 0},
            {name: 'Adri', id: 3, score: 0}
        ];
        return this.players;
    },

    init() {
        this.getInitialState();
    },

    sortPlayers() {
        this.players.leaderBoard.sort(function (previous, current) {
            let result = 0;
            if (previous.score < current.score) {
                result = 1;
            } else if (previous.score > current.score) {
                result = -1;
            }
            return result;
        });
    },

    addPlayer(data) {
        let id = this.players.list.push({name: data}) - 1;
        this.players.leaderBoard.push({name: data, score: 0, id: id});
        this.trigger(this.players.list);
    },

    getPlayers() {
        return this.players;
    },

    incrementScore(playerId) {
        this.players.leaderBoard.find(x => x.id === playerId).score++;
        this.sortPlayers();
        this.trigger(this.players.leaderBoard);
    }
});

export default PlayersStore;

