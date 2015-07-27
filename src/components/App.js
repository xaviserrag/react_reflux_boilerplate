'use strict';

import polyfill from '../utils/polyfill.js';
import React from 'react';
import ClickGame from './ClickGame';
React.render(
    <ClickGame />,
    document.getElementById('main')
);
