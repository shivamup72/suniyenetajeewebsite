import React from 'react'
import styles from './AddPolitics.module.css'
import addbanner from '../../../assest/addbanner.png'

function Add() {
    return (
        <div className={styles.container}>
            <div>
               <img src={addbanner} className={styles.bannerimgsty}/>
            </div>
          
        </div>
    )
}

export default Add