import React from 'react'
import logo from '../../assest/logo.png'
import styles from './TopHeader.module.css'
import location from '../../assest/location.png'
import Suniye from '../../assest/Suniye.png'
import Neta from '../../assest/Neta.png'


function TopHeader() {
    return (
        <div className={styles.container}>
            <div className={styles.flexRow}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} className={styles.logoimgsty} alt="Logo" />
                    {/* <img src={Suniye} alt="Suniye" className={styles.netajitxtsty} />
                    <img src={Neta} alt="Neta" className={styles.netasty} /> */}
                </div>
                <div className={styles.searchcontainer}>
                    {/* <div className={styles.locationcon}>
                        <img src={location} alt="Location" className={styles.citysty} />
                        <h5 className={styles.selectcitysty}>Select city</h5>
                    </div> */}
                    <div className={styles.blackBox}>
                        <p className={styles.headerText}>Search for headlines</p>
                    </div>
                    <div className={styles.yellowBox}>
                        <p className={styles.headerText}>SEARCH</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader
