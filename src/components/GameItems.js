'use strict';
import React from 'react';
import Reflux from 'reflux';
import ClickableArea from '../components/ClickableArea';
import LeaderBoard from '../components/LeaderBoard';
import PlayersStore from '../stores/PlayersStore';

export default React.createClass({

    mixins: [Reflux.ListenerMixin],

    /**
     * We will listen to Players store. On any change we will dispatch refresh list.
     * @returns {null} no data returned
     */
    componentDidMount: function () {
        this.listenTo(PlayersStore, this.refreshList);
    },

    getInitialState: function () {
        return PlayersStore.getPlayers();
    },

    refreshList: function () {
        this.setState(PlayersStore.getPlayers());
    },

    render() {
        return (
            <div className="col-md-10 secondary-box center">
                <ClickableArea players={this.state.list}/>
                <LeaderBoard players={this.state.leaderBoard}/>
            </div>
        );
    }
});
