import React from 'react';
import ReactDOM from 'react-dom';
import { getMountNode } from '@ice/stark';

import router from './router';

console.log('child2', React);
ReactDOM.render(router(), getMountNode());
