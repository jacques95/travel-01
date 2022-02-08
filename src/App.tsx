import React from 'react';

import {Header, Footer, Carousel, SideMenu, ProductCollection} from "./components";
import {productList1, productList2, productList3} from "./mockups";
import sImg1 from './assets/images/sider_2019_02-04-2.png'
import sImg2 from './assets/images/sider_2019_02-04.png'
import sImg3 from './assets/images/sider_2019_12-09.png'
import styles from './App.module.css';
import {Row, Col, Typography} from 'antd'

export default function App() {
    return (
        <div className={styles['side-menu']}>
            <Header/>
            <div className={styles['page-content']}>
                <Row style={{marginTop: 20}}>
                    <Col span={6}>
                        <SideMenu/>
                    </Col>
                    <Col span={18}>
                        <Carousel/>
                    </Col>
                </Row>
                < ProductCollection
                title={<Typography.Title level={3}>爆款推荐</Typography.Title>}
                sideImage={sImg1}
                products={productList1}
                />
            </div>
            <Footer/>
        </div>
    )
}
