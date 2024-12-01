import React from 'react'
import styles from './Politics.module.css'
import Add from '../../common/Addvertiesment'
import banner from '../../assest/addbanner.png'
import ElectionNews from './ElectionNews'
import SwipePoliticalNews from './SwipePoliticalNews'
import OtherPoliticsNews from './OtherPoliticsNews'
import VoteAddverties from '../../common/VoteAddverties'
import Footer from '../../common/Footer/Footer'

function PoliticsNews() {
    return (
        <>
            <div className={styles.maincontainer}>
                <div>
                    <Add bannerImage={banner} />
                    <div>
                        <ElectionNews />
                        <SwipePoliticalNews />
                        <OtherPoliticsNews />
                        <VoteAddverties />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PoliticsNews