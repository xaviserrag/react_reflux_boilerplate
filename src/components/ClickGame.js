'use strict';

import React from 'react';
import Reflux from 'reflux';

import PlayersStore from '../stores/PlayersStore.js';
import Header from '../components/Header.js';

export default React.createClass({
    mixins: [Reflux.connect(PlayersStore, 'players')],

    render() {
        console.log('this.state', this.state);
        console.log('this.state.players', this.state.players);
        return (
            <div>
            <div className="title">
                <h1>CLICK GAME</h1>
            </div>
            <div className="header-parent">
                <Header />
            </div>
            </div>/*,
            <div>
                <ClickableArea todos={this.state.players}/>
                <LeaderBoard todos={this.state.players}/>
            </div>*/
        );
    }
});
