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
          <div className={s.welcomeTitle}>让我们创造客户喜欢的产品</div>
          <span className={s.welcomeDes}>
            专注打造集互联网产品研发+运营推广+投资资源对接服务的一站式生态系统平台，
            我们不仅为不同行业提供整套移动端技术解决方案:包括:管理系统软件定制开发,
            App客户端以及网站系统开发。更提供有价值以及思想的营销推广解决方案以及相关资源对接。
            </span>
          <div className={s.welcomeBtnContainer}>
            <Button to="/" title="详询" btnSty="bordered" />
            <Button to="/" title="更多" />
          </div>
        </div>
        <div className={s.aboutus}>
          <div className={s.aboutLeft}>
            <div className={s.aboutContainer}>
              <span className={s.aboutTitle}>关于我们</span>
              <span className={cx(s.aboutDes, s.aboutTitle)}>
                  我们的团队包括多位iOS、Android开发工程师以及JAVA、PHP、C#后台开发人员，
                  另外还包括资深的UI设计师，在APP程序开发、用户体验设计、
                  UI设计、APP设计和运营等方面拥有较强的行业经验。

                  团队已经完成开发了移动电商APP、O2O应用APP、学习教育APP、
                  生活服务APP等多款精品手机APP应用，积累了大量自主研发的技术成果。
                  并且在智慧城市方面也有所项目参与。
              </span>
              <Button to="/" title="更多" className={s.aboutBtn} />
            </div>
          </div>
          <div className={s.aboutRight} >
            <img className={s.img} alt="img" />
          </div>
        </div>
        <div id="products" className={s.products}>
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
