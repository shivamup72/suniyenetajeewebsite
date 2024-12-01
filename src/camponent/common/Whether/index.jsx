import React from 'react'
import styles from './Whether.module.css'
import degree from '../../assest/degree.png'
import marketingone from '../../assest/marketingone.png'
import marketing from '../../assest/marketing.png'


function Whether() {
    return (
        <div>
            <div className={styles.addcontainersty}>
                <p className={styles.heading}>Weather Today</p>
                <img src={degree} className={styles.imgsty1} />
                <img src={marketingone} className={styles.imgsty2} />
                <img src={marketing} className={styles.imgsty3} />
            </div>
        </div>
    )
}

export default Whether