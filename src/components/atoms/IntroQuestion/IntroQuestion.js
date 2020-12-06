import React from 'react';
import styles from './IntroQuestion.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const IntroQuestion = ({onClick}) => (
  <div className={cx('question')}>          
  <div>
    <h1>
    Legendary cryptoasset exchange
    </h1>
  </div>
  <div className={cx('button')} onClick={onClick}>
  Trade on Joincoin
  </div>
</div>
);

export default IntroQuestion;