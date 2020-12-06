import React from 'react';
import styles from './RegisterTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RegisterTemplate = ({children}) => {
  return (
    <div className={cx('register-template')}>
      <h1>Member registration</h1>
      <p>Almost done. Enter some information required to use the virtual currency simulation exchange.</p>
      <section>
        {children}
      </section>
    </div>
  );
};

export default RegisterTemplate;