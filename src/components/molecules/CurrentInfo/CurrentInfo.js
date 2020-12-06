import React from 'react';
import styles from './CurrentInfo.scss';
import classNames from 'classnames/bind';
import { LabelBlock } from 'components';
import moment from 'moment/moment';
const cx = classNames.bind(styles);

const CurrentInfo = ({info}) => {
  const { 
    lastUpdate,
    last,
    low24hr,
    high24hr,
    highestBid,
    lowestAsk,
    baseVolume,
    percentChange
  } = info.toJS();
  

  function limitDigit(value, d = 10) {
    const digits = (d - Math.round(Math.log10(value)));
    const fixed = value.toFixed(digits > d ? d : digits);
    const float = parseFloat(fixed)
    if(float > 1000) {
      return float.toLocaleString();
    }
    return fixed;
  }
  
  return (
    <div className={cx('current-info')}>
      <div className={cx('')}></div>
      <LabelBlock label="Update date">
        {moment(lastUpdate).format('YYYY MMM DD HH:mm')}
      </LabelBlock>
      <LabelBlock label="Volume (24h)">
        {limitDigit(baseVolume)}
      </LabelBlock>
      <LabelBlock label="Last price">
        {limitDigit(last)}
      </LabelBlock>
      <LabelBlock label="Lowest price (24h)">
        {limitDigit(low24hr)}
      </LabelBlock>
      <LabelBlock label="High price (24h)">
        {limitDigit(high24hr)}
      </LabelBlock>
      <LabelBlock label="Lowest Ask">
        {limitDigit(lowestAsk)}
      </LabelBlock>
      <LabelBlock label="Highest Bid">
        {limitDigit(highestBid)}
      </LabelBlock>
      <LabelBlock label="Rate of change (24h)">
        {percentChange < 0 ? '' : '+' }{Math.round(percentChange * 1000) / 100}%
      </LabelBlock>
    </div>
  );
};

export default CurrentInfo;