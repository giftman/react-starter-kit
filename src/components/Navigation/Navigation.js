/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={cx(s.root, this.props.className)} role="navigation">
        <Link className={s.link} to="/">主页</Link>
        <Link className={s.link} to="/about">关于我们</Link>
        <Link className={s.link} to="/#products">案例</Link>
        <Link className={s.link} to="/#service">服务</Link>
        <Link className={s.link} to="/hireus">开始项目</Link>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
