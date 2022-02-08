import styles from './Carousel.module.css'
import {Image,Carousel as AntCarousel} from "antd";

import carousel01 from '../../assets/images/carousel_1.jpg'
import carousel02 from '../../assets/images/carousel_2.jpg'
import carousel03 from '../../assets/images/carousel_3.jpg'

export const Carousel:React.FC =()=>{
    return <AntCarousel autoplay className={styles.slider}>
        <img src={carousel01} alt=""/>
        <img src={carousel02} alt=""/>
        <img src={carousel03} alt=""/>
    </AntCarousel>
}
