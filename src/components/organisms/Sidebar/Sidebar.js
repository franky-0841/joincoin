import React from 'react';
import styles from './Sidebar.scss';
import classNames from 'classnames/bind';
import { SidebarWrapper, Button } from 'components';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const MenuItem = ({ to, children, onClick}) => {
  return (<Link onClick={onClick} className={cx('menu-item')} to={to}>{children}</Link>)
}

const Sidebar = ({
  visible,
  user,
  onLoginClick,
  onClose,
  onLogout
}) => (
  <SidebarWrapper visible={visible}>
    <div className={cx('upper-block')}>
      {
        user ? [
          <div className={cx('message')} key={0}>
            <b>{user.get('displayName')}</b>Sir,<br/> Hello!
          </div>,
          <Button key={1} className={cx('sign-button')} invert onClick={onLogout}>Log out</Button>
        ]
        : [
          <div className={cx('message')} key={0}>
            Start mock trading now!
          </div>,
          <Button className={cx('sign-button')} invert onClick={onLoginClick} key={1}>
           Login / Register
          </Button>
        ]
      }
    </div>
    <div className={cx('menu')}>
      <MenuItem to="/trade" onClick={onClose}>Exchange</MenuItem>
      { user && <MenuItem to="/wallet" onClick={onClose}>My wallet</MenuItem>}
      <MenuItem to="/ranking" onClick={onClose}>Ranking</MenuItem>
    </div>
  </SidebarWrapper>
);

export default Sidebar;