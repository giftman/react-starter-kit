/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
// import Link from '../Link';
import logoUrl from '../Header/logo-small.png';
import logoUrl2x from '../Header/logo-small@2x.png';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.upDown}>
          <div className={s.container}>
            <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="38" height="38" alt="React" />
            <span className={s.spacer}>© React</span>
            <div className={s.padding} />
            <div className={s.textContainer}>
              <span className={s.spacer}>Mese Selimovica, 52 78000, Banja Luka BiH</span>
            </div>

            <div className={s.padding} />

            <div className={s.textContainer}>
              <span className={s.spacer}>+8613760752289 email@examplecom</span>
            </div>
            <div className={s.padding} />

            <div >
              <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="50" height="50" alt="React" />
            </div>
          </div>
          <div className={s.text}>2016 © Nippy Studio. All rights reserved</div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
