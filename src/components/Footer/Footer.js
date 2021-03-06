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
import qrcode from './qrcode.jpg';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.upDown}>
          <div className={s.container}>
            <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="38" height="38" alt="React" />
            <span className={s.spacer}>领创</span>
            <div className={s.padding} />
            <div className={s.textContainer}>
              <span className={s.spacer}>广东省广州市海珠区新港西路135号
              中山大学国家大学科技园B座</span>
            </div>

            <div className={s.padding} />

            <div className={s.textContainer}>
              <span className={s.spacer}>+8613760752289 chufan617@gmail.com</span>
            </div>
            <div className={s.padding} />

            <div >
              <img src={qrcode} width="144" height="144" alt="React" />
            </div>
          </div>
          <div className={s.text}>2016 © LingChuangTech. All rights reserved</div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
