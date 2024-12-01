import React, { useState } from "react";
import line from "../../../assest/Line.png";
import anupma from "../../../assest/sportsfour.png";
import cd from "../../../assest/sportsone.png";
import gill from "../../../assest/sportstwo.png";
import Frame from "../../../assest/Frame.png";

import indvspak from "../../../assest/sportsthree.png";
import styles from "./Sports.module.css";
import { Link } from "react-router-dom";

const newsItems = [
    {
        imgSrc: anupma,
        time: '5hrs ago',
        soccer: 'SOCCER',
        text: "Redrafting the 2016 NBA Draft, from Simmons and Siakam to VanVleet",
    },
    {
        imgSrc: cd,
        time: '5hrs ago',
        soccer: 'SOCCER',
        text: "Stones and Haaland inspire stunning late turnaround as City edge past Dortmund",
    },
    {
        imgSrc: gill,
        time: '5hrs ago',
        soccer: 'SOCCER',
        text: "How to bet Canelo-GGG 3",
    },
    {
        imgSrc: indvspak,
        time: '5hrs ago',
        soccer: 'SOCCER',
        text: "Tough lineup decisions? Get Week 2 fantasy football start 'em, sit 'em advice ",
    },
    {
        imgSrc: anupma,
        time: '5hrs ago',
        soccer: 'SOCCER',
        text: "Redrafting the 2016 NBA Draft, from Simmons and Siakam to VanVleet",
    },
    {
        imgSrc: cd,
        time: '5hrs ago',
        soccer: 'SOCCER',
        text: "Stones and Haaland inspire stunning late turnaround as City edge past Dortmund",
    },
    {
        imgSrc: gill,
        time: '5hrs ago',
        soccer: 'SOCCER',
        text: "How to bet Canelo-GGG 3",
    },
    {
        imgSrc: indvspak,
        time: '5hrs ago',
        soccer: 'SOCCER',
        text: "Tough lineup decisions? Get Week 2 fantasy football start 'em, sit 'em advice ",
    },
];

function TrendingSportsNews() {
    return (
        <div>
            <div>
                <div style={{ position: "relative" }}>
                    <img src={Frame} alt="frame" className={styles.framestyle} />
                    <img src={line} alt="line" className={styles.lineImage} />
                </div>
            </div>
            <div className={styles.newscontainer}>
                {newsItems.map((item, index) => (
                    <Link
                        to={`/sports/${item.id}`}
                        state={{ item }}
                        key={item.id}
                        className={styles.newsLink}
                    >
                        <div className={styles.trendingnewimgsty} key={index}>
                            <img
                                src={item.imgSrc}
                                className={styles.anumpaimgsty}
                                alt="News Thumbnail"
                            />
                            <div className={styles.newconsty}>
                                <div className={styles.soccercontainer}>
                                    <p className={styles.soccertxtsty}>{item?.soccer}</p>
                                </div>
                                <p className={styles.timetxtsty}>{item?.time}</p>
                                <p className={styles.newstxtsty}>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default TrendingSportsNews;
