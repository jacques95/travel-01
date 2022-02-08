import React from 'react';

import {Header, Footer} from "./components";
import styles from './App.module.css';

export default function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <Footer/>
        </div>
    )
}
