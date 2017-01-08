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
import s from './Hire.css';
import Button from '../../components/Button';

class Hire extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      contact: {
        company: '',
        name: '',
        email: '',
        phone: '',
        des: '',
        budge: '',
        from: '',
      },
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  onClick() {
    // console.log('click');
    const { contact } = this.state;
    console.log(contact);
  }

  handleChange(event, name) {
    const { contact } = this.state;
    contact[name] = event.target.value;
    this.setState({
      contact,
    });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <img className={s.img} alt="img" />
          <div className={s.quote}>
            <div className={s.title}>Hire us to help you build excellent software</div>
            <div className={s.quoteEle}>
              <div className={s.eleTitle}>WHAT IS YOUR COMPANY OR PROJECT NAME?</div>
              <input
                className={s.eleInput}
                value={this.state.contact.company}
                onChange={(value) => { this.handleChange(value, 'company'); }}
              />
            </div>
            <div className={s.quoteEle}>
              <div className={s.eleTitle}>WHAT IS YOUR NAME?</div>
              <input
                className={s.eleInput}
                value={this.state.contact.name}
                onChange={(value) => { this.handleChange(value, 'name'); }}
              />
            </div>
            <div className={s.quoteEle}>
              <div className={s.eleTitle}>WHAT IS YOUR EMAIL ADDRESS?*</div>
              <input
                value={this.state.contact.email}
                onChange={(value) => { this.handleChange(value, 'email'); }}
              />
            </div>
            <div className={s.quoteEle}>
              <div className={s.eleTitle}>WHAT IS YOUR PHONE NUMBER?</div>
              <input
                value={this.state.contact.phone}
                onChange={(value) => { this.handleChange(value, 'phone'); }}
              />
            </div>
            <div className={s.quoteEle}>
              <div className={s.eleTitle}>WHAT CAN THOUGHTBOT DO FOR YOU?</div>
              <textarea
                className={s.eleInput} style={{ height: 80 }}
                value={this.state.contact.des}
                onChange={(value) => { this.handleChange(value, 'des'); }}
              />
            </div>
            <div className={s.quoteEle}>
              <div className={s.eleTitle}>WHAT IS YOUR BUDGET?</div>
              <input
                className={s.eleInput}
                value={this.state.contact.budge}
                onChange={(value) => { this.handleChange(value, 'budge'); }}
              />
            </div>
            <div className={s.quoteEle}>
              <div className={s.eleTitle}>HOW DID YOU HEAR ABOUT THOUGHTBOT?</div>
              <input
                className={s.eleInput}
                value={this.state.contact.from}
                onChange={(value) => { this.handleChange(value, 'from'); }}
              />
            </div>
            <Button to="#" title="确认" onClick={this.onClick()} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Hire);
