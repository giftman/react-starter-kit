/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Button from '../../components/Button';
import cellImg from './cellimg.png';
import serviceImg from './service.png';

class Home extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.welcome}>
          <div className={s.welcomeTitle}>WELCOME TO  OUR AGENCY</div>
          <span className={s.welcomeDes}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          <div className={s.welcomeBtnContainer}>
            <Button to="/" title="GET A QUOTE" btnSty="bordered" />
            <Button to="/" title="FIND MORE" />
          </div>
        </div>
        <div className={s.aboutus}>
          <div className={s.aboutLeft}>
            <div className={s.aboutContainer}>
              <span className={s.aboutTitle}>ABOUT US</span>
              <span className={cx(s.aboutDes, s.aboutTitle)}>
                  A posuere scelerisque gravida facilisi parturient
                  magna urna donec parturient per augue a amet quam
                  nullam a ad a. Parturient velit imperdiet in suspendisse
                  eget a parturient adipiscing penatibus convallis himenaeos
                  felis torquent facilisi elementum a penatibus suscipit aliquam.

                  Porta at at suspendisse dolor fames ullamcorper cum id per suspendisse
                   a dignissim eu dapibus platea turpis augue mi proin lorem morbi sapien
                   facilisis lectus.
              </span>
              <Button to="/" title="FIND MORE" className={s.aboutBtn} />
            </div>
          </div>
          <div className={s.aboutRight} >
            <img className={s.img} alt="img" />
          </div>
        </div>
        <div className={s.products}>
          <div className={s.productsUp}>
            <span className={s.welcomeTitle}>WE BUILD BEST PRODUCTS</span>
          </div>
          <div className={s.productsMid}>
            <div className={s.productCell}>
              <img src={cellImg} className={s.productImg} alt="img" />
              <div className={s.productCellInfo}>
                <span className={s.productCellTitle}>Manage Sites Easily</span>
                <span className={s.productCellDes}>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et
                           dolore magna aliqua.</span>
              </div>
            </div>
            <div className={s.productCell}>
              <img src={cellImg} className={s.productImg} alt="img" />
              <div className={s.productCellInfo}>
                <span className={s.productCellTitle}>Manage Sites Easily</span>
                <span className={s.productCellDes}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.</span>
              </div>
            </div>
            <div className={s.productCell}>
              <img src={cellImg} className={s.productImg} alt="img" />
              <div className={s.productCellInfo}>
                <span className={s.productCellTitle}>Manage Sites Easily</span>
                <span className={s.productCellDes}>Lorem ipsum dolor sit amet,
                 consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore
                           et dolore magna aliqua.</span>
              </div>
            </div>
            <div className={s.productCell}>
              <img src={cellImg} className={s.productImg} alt="img" />
              <div className={s.productCellInfo}>
                <span className={s.productCellTitle}>Manage Sites Easily</span>
                <span className={s.productCellDes}>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.</span>
              </div>
            </div>

          </div>
          <Button to="/" title="MORE CASE" className={s.aboutBtn} />
        </div>
        <div className={s.service}>
          <div className={s.serviceUp}>
            <span className={s.welcomeTitle}>OUR SERVICES</span>
          </div>
          <div className={s.serviceDown}>
            <div className={s.serviceCell}>
              <img src={serviceImg} className={s.serviceImg} alt="img" />
              <div className={s.serviceCellTitle}>Consectetur vestibulum</div>
              <div className={s.serviceCellDes}>Consectetur vestibulum maecenas curabitur
              hac felis vestibulum urna velit parturient suspendisse a ad lacus mauris</div>
            </div>
            <div className={s.serviceCell}>
              <img src={serviceImg} className={s.serviceImg} alt="img" />
              <div className={s.serviceCellTitle}>Consectetur vestibulum</div>
              <div className={s.serviceCellDes}>Consectetur vestibulum maecenas curabitur hac
               felis vestibulum urna velit parturient suspendisse a ad lacus mauris</div>
            </div>
            <div className={s.serviceCell}>
              <img src={serviceImg} className={s.serviceImg} alt="img" />
              <div className={s.serviceCellTitle}>Consectetur vestibulum</div>
              <div className={s.serviceCellDes}>Consectetur vestibulum maecenas curabitur hac
              felis vestibulum urna velit parturient suspendisse a ad lacus mauris</div>
            </div>
            <div className={s.serviceCell}>
              <img src={serviceImg} className={s.serviceImg} alt="img" />
              <div className={s.serviceCellTitle}>Consectetur vestibulum</div>
              <div className={s.serviceCellDes}>Consectetur vestibulum maecenas curabitur hac
               felis vestibulum urna velit parturient suspendisse a ad lacus mauris</div>
            </div>
            <div className={s.serviceCell}>
              <img src={serviceImg} className={s.serviceImg} alt="img" />
              <div className={s.serviceCellTitle}>Consectetur vestibulum</div>
              <div className={s.serviceCellDes}>Consectetur vestibulum maecenas curabitur hac
               felis vestibulum urna velit parturient suspendisse a ad lacus mauris</div>
            </div>
            <div className={s.serviceCell}>
              <img src={serviceImg} className={s.serviceImg} alt="img" />
              <div className={s.serviceCellTitle}>Consectetur vestibulum</div>
              <div className={s.serviceCellDes}>Consectetur vestibulum maecenas curabitur hac
               felis vestibulum urna velit parturient suspendisse a ad lacus mauris</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
