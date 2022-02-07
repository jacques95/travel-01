import React from "react";
import styles from './Robot.module.css'
import {useAddToCart} from "./AddToCart";

interface RobotProps {
    id: number,
    name: string,
    email: string
}

const Robot: React.FC<RobotProps> = ({id, name, email}) => {
    const addToCart = useAddToCart()
    return (
        <div className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot"/>
            <h2>{name}</h2>
            <p>{email}</p>
            <button onClick={() => addToCart(id,name)}>加入购物车</button>
        </div>
    )
}
export default Robot
