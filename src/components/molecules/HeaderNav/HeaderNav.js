import React from 'react';
import styles from './HeaderNav.scss';
import classNames from 'classnames/bind';
import { FlexBox, NavItem } from 'components';

const cx = classNames.bind(styles);

const HeaderNav = ({logged}) => {
  return (
    <FlexBox row
      className={cx('header-nav')}>
      <NavItem to="/trade">
       Exchange
      </NavItem>
      {logged && <NavItem to="/wallet">
      My wallet
      </NavItem> }
      <NavItem to="/ranking">
      Ranking
      </NavItem>
    </FlexBox>
  );
};

export default HeaderNav;