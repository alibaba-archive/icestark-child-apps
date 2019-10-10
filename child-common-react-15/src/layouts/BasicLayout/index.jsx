import React from 'react';

import style from './index.module.scss';

export default props => {
  return (
    <div className={style.main}>
      <h3>通用页面（基于 React@15.x）</h3>
      {props.children}
    </div>
  );
};
