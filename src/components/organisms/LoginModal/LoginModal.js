import React from 'react';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
import { Modal, Input, Button, TextButton, SocialLoginButton, InputError } from 'components';
const cx = classNames.bind(styles);

const LoginModal = ({
  visible, 
  mode, 
  forms,
  error,
  onChangeInput,
  onChangeMode,
  onLogin,
  onRegister,
  onSocialLogin,
  onClose
}) => {
  const isLogin = mode === 'login';
  const modeText = isLogin ? 'Login' : 'Register';
  const invertedText = isLogin ? 'Register' : 'Login';
  
  const {
    email,
    password,
  } = forms.toJS();

  const {
    email: emailError,
    password: passwordError,
    localLogin: localLoginError
  } = error ? error.toJS() : { };

  const onButtonClick = isLogin ? onLogin : onRegister;

  return (
    <Modal visible={visible} mobileFullscreen>
      <div className={cx('login-modal')}>
        <div className={cx('bar')}></div>
        <div className={cx('close')} onClick={onClose}>✕</div>
        <div className={cx('content')}>
        <h3>{modeText} with email  </h3>
          <InputError error={localLoginError} noMarginTop/>
          <div className={cx('form')}>
            <Input 
               value={email} 
               name="email"
               onChange={onChangeInput}
               fullWidth 
               big 
               placeholder="e-mail"/>
              <InputError error={emailError}/>
            <Input 
               value={password} 
               name="password"  
               onChange={onChangeInput}
               fullWidth 
               big 
               placeholder="password" 
               type="password"/>
              <InputError error={passwordError}/>
          </div>
          <Button 
            flat color="teal" 
            flex padding="0.6rem" 
            className={cx('login')}
            onClick={onButtonClick}>{modeText}</Button>
          <div className={cx('login-foot')}>
            <TextButton>Forgot your password</TextButton>
            <TextButton right onClick={onChangeMode}>{invertedText}</TextButton>
          </div>
          <div className={cx('separator')}>
            <div className={cx('or')}>OR</div>
          </div>
          <h3>{modeText} with social account </h3>
          <SocialLoginButton onSocialLogin={onSocialLogin}/>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;