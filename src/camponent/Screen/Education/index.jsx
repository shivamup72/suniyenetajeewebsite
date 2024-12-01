import React from 'react';
import styles from './Education.module.css';
import SpecialEducationNews from './SpecialEducationNews';
import OtherEducationNews from './OtherEducationNews';
import SlideEducationNews from './SlideEducationNews';
import Add from '../../common/Addvertiesment';
import addimg from '../../assest/educationadd.png'
import Footer from '../../common/Footer/Footer';
import VoteAddverties from '../../common/VoteAddverties';

function Education() {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '96%',
                backgroundColor: '#fff',
                maxWidth: '1279px',
            }}>
                <div>
                    <Add bannerImage={addimg} />
                    <div className={styles.coloumsty}>
                        <div>
                            <SpecialEducationNews />
                            <OtherEducationNews />
                        </div>
                        <div>
                            <SlideEducationNews />
                        </div>
                    </div>
                </div>
            </div>
            <VoteAddverties />

            <Footer />
        </>
    );
}

export default Education;
