'use strict';

import React from 'react';
import Reflux from 'reflux';

import PlayersStore from '../stores/PlayersStore.js';
import Header from '../components/Header.js';
import ClickableArea from '../components/ClickableArea.js';

export default React.createClass({
    render() {
        return (
            <div>
                <div className="title">
                    <h1>CLICK GAME</h1>
                </div>
                <div className="header-parent">
                    <Header />
                </div>
                    <ClickableArea />
            </div>
        );
    }
});
