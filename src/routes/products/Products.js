/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Products.css';

const products = require('../home/products.json');

class Products extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div id="products" className={s.products}>
            <div className={s.productsMid}>
              {
                products.map((product, index) =>
                  (<div key={index} className={s.productCell}>
                    <img src={product.thumb} className={s.productImg} alt="img" />
                    <div className={s.productCellInfo}>
                      <span className={s.productCellTitle}>{product.name}</span>
                      <span className={s.productCellDes}>{product.des}</span>
                    </div>
                  </div>),
                )
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Products);
