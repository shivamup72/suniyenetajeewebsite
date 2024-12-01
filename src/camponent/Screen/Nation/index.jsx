import React from 'react'
import styles from './Nation.module.css'
import NationAdd from './NationAdd'
import Advertisement from './Advertisement'


function Nation() {
    return (
        <div className={styles.container}>
            <NationAdd />
        </div>
    )
}

export default Nation