import React from 'react';
import { PageTemplate, PolyBackground, BgColor, CoinMain, Card } from 'components';
import {HeaderContainer, CoinMainContainer, SocketSubscriber} from 'containers';
import styles from './HomePage.scss';
import classNames from 'classnames/bind';
import IntroQuestionContainer from 'containers/IntroQuestionContainer';
import MoreIcon from 'react-icons/lib/md/more-vert';
import { Link } from 'react-router-dom';
import TrophyIcon from 'react-icons/lib/fa/trophy';
import GithubIcon from 'react-icons/lib/go/mark-github';
import EmailIcon from 'react-icons/lib/md/email';

const cx = classNames.bind(styles);


const HomePage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
      <SocketSubscriber channel="TICKER"/>
      <PolyBackground home>
        <IntroQuestionContainer/>
      </PolyBackground>
      <BgColor color="#f6f6f6"/>
      <div className={cx('block', 'responsive')}>
        <h2>At Joincoin, we currently support 68 cryptocurrencies.</h2>
        <CoinMainContainer/>
        <div className={cx('more')}>
          <Link className={cx('more-button')} to="/trade">
          See more on exchanges
          </Link>
        </div>
      </div>
      <div className={cx('third')}>
        <div className={cx('responsive')}>
          <Link to="/ranking" className={cx('column')}>
            <TrophyIcon/>
            <div className={cx('description')}>
              <h3>Ranking system</h3>
              <p>Compete against others for your return. <br/>And, check out other people's trading strategies!</p>
            </div>
          </Link>
          <a className={cx('column')} href="https://github.com/franky-0841/joincoin-frontend" target="_blank" rel="noopener noreferrer">
            <GithubIcon/>
            <div className={cx('description')}>
              <h3>Open source</h3>
              <p>JOincoin is an open source project. <br/>Pull Requests are always welcome.</p>
            </div>
          </a>
        </div>
      </div>
      <div className={cx('footer')}>
        <div className={cx('email')}>
          <EmailIcon/> support@joincoin.uz
        </div>
        <div className={cx('copyright')}>
          Copyright © 2020 Joincoin
        </div>
      </div>
    </PageTemplate>
  );
};

export default HomePage;