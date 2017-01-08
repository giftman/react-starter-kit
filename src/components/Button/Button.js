/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
// import history from '../../core/history';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Button.css';
import Link from '../Link';

class Button extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    btnSty: PropTypes.string,
    className: PropTypes.string,
    // children: PropTypes.node,
    onClick: PropTypes.func,
  };


  render() {
    const { to, title, onClick } = this.props;
    let content;
    if (this.props.btnSty && this.props.btnSty === 'bordered') {
      content = (<div className={s.container}>
        <div className={s.title}>
          {title}
        </div>
      </div>);
    } else {
      content = (
        <div className={cx(s.container, s.border, this.props.className)}>
          <div className={cx(s.title, s.borderText)}>
            {title}
          </div>
        </div>
      );
    }
    return (<Link className={s.link} to={to} onClick={onClick}>
      {content}
    </Link>);
  }
}

export default withStyles(s)(Button);
