import React from 'react';
import styles from './RegisterForm.scss';
import classNames from 'classnames/bind';

import {
  SectionWithTitle,
  Input,
  SelectCurrency,
  Button,
  AlignRight,
  InitialMoneyOptions
} from 'components';


const cx = classNames.bind(styles);

const RegisterForm = ({
  nickname,
  currency,
  optionIndex,
  displayNameExists,
  error,
  onChangeNickname,
  onSetCurrency,
  onSelectOptionIndex,
  onSubmit,
  onNicknameBlur
}) => {
  return (
    <div className={cx('register-form')}>
    <SectionWithTitle title="nickname" description="Enter the nickname you will use for the service."> 
           {
               displayNameExists && <div className={cx('error')}>This is a nickname that already exists.</div> 
             }
           <Input  maxLength={15} value={nickname} onChange={onChangeNickname} onBlur={onNicknameBlur}/>
         </SectionWithTitle>
         <SectionWithTitle title="Initial fund setting"> 
           <div className={cx('description')}>
             Set the initial funds to be used on the mock exchange. {"\r\n"}Initial funds can be reset at any time from the settings page.
           </div>
           <h4>
           Currency selection
           </h4>
           <SelectCurrency currency={currency} onSetCurrency={onSetCurrency}/>
           <h4>Select amount</h4>
           <InitialMoneyOptions currency={currency} optionIndex={optionIndex} onSelect={onSelectOptionIndex}/>
         </SectionWithTitle>
             {
               error && (
                 <AlignRight><div className={cx('error')}>{ error }</div></AlignRight>
               )
             }
         <AlignRight>
           <Button disabled={displayNameExists} flat color="teal" className={cx('register-button')} xPadding="2rem"  onClick={onSubmit}>Join</Button>
         </AlignRight>
 </div>
  );
};

export default RegisterForm;