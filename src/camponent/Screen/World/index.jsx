import React from 'react'
import styles from './World.module.css'
import WorldNews from './WorldNews'
import HighlightedNews from './HighlightedNews/HighlightedNews'
import SwipeWorldNews from './SwipeWorldNews'
import CategoriesWorldNews from './CategoriesWorldNews'
import Add from '../../common/Addvertiesment'
import addimg from '../../assest/WorldAdd.png'

function World() {
    return (
        <div className={styles.maincontainer}>
            <div>
                <Add bannerImage={addimg} />
                <div className={styles.coloumsty}>
                    <WorldNews />
                    <HighlightedNews />
                </div>
                {/* here is bug */}
                <SwipeWorldNews />
                {/* here is bug */}

                <CategoriesWorldNews />
            </div>
        </div>
    )
}

export default World