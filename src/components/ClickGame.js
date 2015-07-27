'use strict';

import React from 'react';

import Header from '../components/Header.js';
import ClickableArea from '../components/ClickableArea.js';
import LeaderBoard from '../components/LeaderBoard.js';

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
                    <LeaderBoard />
            </div>
        );
    }
});
