/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const Hireus = Model.define('Hireus', {

  company: {
    type: DataType.STRING(100),
    allowNull: false,
  },

  name: {
    type: DataType.STRING(100),
  },

  email: {
    type: DataType.STRING(255),
    // validate: { isEmail: true },
  },

  phone: {
    type: DataType.STRING(50),
    allowNull: false,
    primaryKey: true,
  },

  des: {
    type: DataType.STRING(1000),
    allowNull: false,
  },

  budge: {
    type: DataType.STRING(255),
  },

  from: {
    type: DataType.STRING(255),
  },

}, {

  indexes: [
    { fields: ['phone'] },
  ],

});

export default Hireus;
