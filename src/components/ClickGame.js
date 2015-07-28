'use strict';

import React from 'react';

import Header from '../components/Header';
import GameItems from '../components/GameItems';

export default React.createClass({
    render() {
        return (
            <div className="col-md-7 center">
                <div className="title">
                    <h1>Click game example:</h1>
                </div>
                <div className="header-parent">
                    <Header />
                </div>
                <div className="col-md-10 secondary-box center">
                    <GameItems />
                </div>
            </div>
        );
    }
});
