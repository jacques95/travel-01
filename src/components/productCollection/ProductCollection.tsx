import React from "react";

import {Row, Col, Divider} from 'antd'
import {ProductImage} from "./ProductImage";
import styles from './ProductCollection.module.css'

interface PropsType {
    title: JSX.Element
    sideImage: string
    products: any[]

}

export const ProductCollection: React.FC<PropsType> = ({title, sideImage, products}) => {
    return <div className={styles.content}>
        <Divider orientation='left'>{title}</Divider>
        <Row>
            <Col span={4}>
                <img src={sideImage} className={styles['side-image']} alt=""/>
            </Col>

            <Col span={20}>
                <Row>
                    <Col span={12}>
                        <ProductImage
                            id={products[0].id}
                            size={'large'}
                            title={products[0].title}
                            imageSrc={products[0].touristRoutePictures[0].url}
                            price={products[0].price}
                        />
                    </Col>
                    <Col span={12}>
                        <Row>
                            <Col span={12}><ProductImage
                                id={products[0].id}
                                size={'small'}
                                title={products[0].title}
                                imageSrc={products[0].touristRoutePictures[0].url}
                                price={products[0].price}
                            /></Col>
                            <Col span={12}><ProductImage
                                id={products[0].id}
                                size={'small'}
                                title={products[0].title}
                                imageSrc={products[0].touristRoutePictures[0].url}
                                price={products[0].price}
                            /></Col>
                        </Row>
                        <Row>
                            <Col span={12}><ProductImage
                                id={products[0].id}
                                size={'small'}
                                title={products[0].title}
                                imageSrc={products[0].touristRoutePictures[0].url}
                                price={products[0].price}
                            /></Col>
                            <Col span={12}><ProductImage
                                id={products[0].id}
                                size={'small'}
                                title={products[0].title}
                                imageSrc={products[0].touristRoutePictures[0].url}
                                price={products[0].price}
                            /></Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}><ProductImage
                        id={products[0].id}
                        size={'small'}
                        title={products[0].title}
                        imageSrc={products[0].touristRoutePictures[0].url}
                        price={products[0].price}
                    /></Col>
                    <Col span={6}><ProductImage
                        id={products[0].id}
                        size={'small'}
                        title={products[0].title}
                        imageSrc={products[0].touristRoutePictures[0].url}
                        price={products[0].price}
                    /></Col>
                    <Col span={6}><ProductImage
                        id={products[0].id}
                        size={'small'}
                        title={products[0].title}
                        imageSrc={products[0].touristRoutePictures[0].url}
                        price={products[0].price}
                    /></Col>
                    <Col span={6}><ProductImage
                        id={products[0].id}
                        size={'small'}
                        title={products[0].title}
                        imageSrc={products[0].touristRoutePictures[0].url}
                        price={products[0].price}
                    /></Col>
                </Row>
            </Col>
        </Row>
    </div>
}
