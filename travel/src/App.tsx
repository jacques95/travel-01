import React from 'react';
import styles from './App.module.css';

import {Footer, Header} from './components'
export default function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <Footer/>
        </div>
    );
}
