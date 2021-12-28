import React from 'react';
import './GridItem.css';
import Menu from '../../images/icon-ellipsis.svg';

const GridItem = ({ data, timeframe }) => {
    return <div className="grid__item">
        <div className="grid__item_card">
            <div className="grid__item_card-title">
                <h3>{data.title}</h3>
                <img src={Menu} alt="menu" />
            </div>
            <div className="grid__item_card__time">
                <h2>{data.timeframes[timeframe].current}hrs</h2>
                <p>Last Week - {data.timeframes[timeframe].previous}hrs</p>
            </div>
        </div>
    </div>;
}

export default GridItem
