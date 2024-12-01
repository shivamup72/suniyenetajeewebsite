import React from 'react'
import styles from './VoteAddverties.module.css'
import voteadd from '../../assest/voteaddimg.png'

function VoteAddverties() {
    return (
        <div className={styles.container}>
            <img src={voteadd} alt='vote addverties' className={styles.imgstyle} />
        </div>
    )
}

export default VoteAddverties