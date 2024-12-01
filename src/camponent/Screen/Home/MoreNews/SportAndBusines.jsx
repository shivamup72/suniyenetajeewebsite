import React from 'react';
import styles from './MoreNews.module.css';
import stadium from '../../../assest/stadium.png';
import run from '../../../assest/run.png';
import croud from '../../../assest/croud.png';
import redport from '../../../assest/redport.png';
import narendramodi from '../../../assest/narendramodi.png';
import soilder from '../../../assest/soilder.png';
import unsplash from '../../../assest/unsplash.png';
import river from '../../../assest/river.png';
import field from '../../../assest/field.png';
import moon from '../../../assest/moon.png';
import socialmedia from '../../../assest/socialmedia.png';
import doctors from '../../../assest/doctors.png';
import { Link } from 'react-router-dom';

function SportAndBusiness() {
  // Sample data arrays
  const sportsNews = [
    { id: 1, title: 'Qatar stadium coming along for last stretch', image: stadium },
    { id: 2, title: 'Preperatiuon for nepalgunj marathon completed', image: run },
    { id: 3, title: 'Netherlands qualifies for world cup', image: croud },
  ];

  const internationalNews = [
    { id: 1, title: 'Qatar stadium coming along for last stretch', image: redport },
    { id: 2, title: 'Preperatiuon for nepalgunj marathon completed', image: narendramodi },
    { id: 3, title: 'Netherlands qualifies for world cup', image: soilder },
  ];

  const BusinessNews = [
    { id: 1, title: 'self reliance in chitwan fish production', image: unsplash },
    { id: 2, title: 'the number of tourist arrivals in chitwan was zero last fiscal year', image: river },
    { id: 3, title: 'farmers return to native paddy', image: field },
  ];

  const TechnologiesNews = [
    { id: 1, title: 'School students starts nepali satellite', image: moon },
    { id: 2, title: 'Facebook company’s new name now ‘meta’', image: socialmedia },
    { id: 3, title: 'sucessful human kidney transplant', image: doctors },
  ];

  return (
    <div className={styles.container}>
      {/* Sports Section */}
      <div className={styles.newsrows}>
        <div className={styles.itemcontainer}>
          <div className={styles.itemsepretor}>
            <p className={styles.headingtxtsty}>Sports</p>
            <p className={styles.seemoretxtsty}>See More</p>
          </div>
          {sportsNews.map((news, index) => (
            <Link
              to={`/homenews/${index}`}
              state={{ item: news }}
              key={news.id}
              className={styles.newsLink}
            >
              <div key={news.id} className={styles.newscontainer}>

                <div className={styles.imgcontainer}>
                  <img src={news.image} alt="sport" className={styles.imgsty} />
                </div>
                <div>
                  <p className={styles.newstxtsty}>{news.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* International Section */}
        <div>
          <div className={styles.itemcontainer}>
            <div className={styles.itemsepretor}>
              <p className={styles.headingtxtsty}>International</p>
              <p className={styles.seemoretxtsty}>See More</p>
            </div>
            {internationalNews.map((news, index) => (
              <Link
                to={`/homenews/${index}`}
                state={{ item: news }}
                key={news.id}
                className={styles.newsLink}
              >
                <div key={news.id} className={styles.newscontainer}>
                  <div className={styles.imgcontainer}>
                    <img src={news.image} alt="international" className={styles.imgsty} />
                  </div>
                  <div>
                    <p className={styles.newstxtsty}>{news.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Business And Technology */}
      {/* Business */}
      <div className={styles.newsrows}>
        <div className={styles.itemcontainer}>
          <div className={styles.itemsepretor}>
            <p className={styles.headingtxtsty}>Business</p>
            <p className={styles.seemoretxtsty}>See More</p>
          </div>
          {BusinessNews.map((news, index) => (
            <Link
              to={`/homenews/${index}`}
              state={{ item: news }}
              key={news.id}
              className={styles.newsLink}
            >
              <div key={news.id} className={styles.newscontainer}>
                <div className={styles.imgcontainer}>
                  <img src={news.image} alt="sport" className={styles.imgsty} />
                </div>
                <div>
                  <p className={styles.newstxtsty}>{news.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Technology Section */}
        <div>
          <div className={styles.itemcontainer}>
            <div className={styles.itemsepretor}>
              <p className={styles.headingtxtsty}>Technologies</p>
              <p className={styles.seemoretxtsty}>See More</p>
            </div>
            {TechnologiesNews.map((news, index) => (
              <Link
                to={`/homenews/${index}`}
                state={{ item: news }}
                key={news.id}
                className={styles.newsLink}
              >
                <div key={news.id} className={styles.newscontainer}>
                  <div className={styles.imgcontainer}>
                    <img src={news.image} alt="international" className={styles.imgsty} />
                  </div>
                  <div>
                    <p className={styles.newstxtsty}>{news.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SportAndBusiness;
