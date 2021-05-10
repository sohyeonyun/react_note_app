import React, {useState} from 'react';

import Input from '../components/Input';
import Button from '../components/Button';
import Header from '../components/Header';

import register from '../functions/register'

import user_icon from '../assets/user.png';
import lock_icon from '../assets/lock.png';

import './register.css';

function Register({history}) {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [password_check, setPasswordCheck] = useState('');
  const [button_loading, setButtonLoading]  = useState(false);

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handlePasswordCheck(e) {
    setPasswordCheck(e.target.value);
  }
  function handleNavigation() {
    history.push('/login');
  }

  function handleRegister() {
    // 회원가입 기능 구현
    if (!email) {
      alert('이메일을 입력해주세요');
      return;
    }
    // 이메일 형식 확인(정규표현식)
    if (!password) {
      alert('비밀번호를 입력해주세요');
      return;
    }
    if (!password_check) {
      alert('비밀번호 확인을 입력해주세요');
      return;
    }
    if (password !== password_check) {
      alert('비밀번호와 비밀번호 확인이 다릅니다');
      return;
    }

    setButtonLoading(true);
    // Firebase 회원가입 함수
    register(email, password, (success) => {
      if (success) {
        // 회원가입이 성공했을 때
        history.push('/');
      } else {
        // 회원가입이 실패했을 때
      }
      setButtonLoading(false);
    });


  }

  return (
    <>
      <Header button_text='로그인' onClick={handleNavigation} />
      <main>
        <section className="register__login-section">
          <div className="register__title">회원가입</div>
          <Input placeholder='이메일' icon={user_icon} value={email} onChange={handleEmail} />
          <Input placeholder='비밀번호' icon={lock_icon} value={password} onChange={handlePassword} />
          <Input 
            placeholder='비밀번호 확인' 
            icon={lock_icon} 
            value={password_check} 
            onChange={handlePasswordCheck} 
          />
          <Button text='회원가입' onClick={handleRegister} loading={button_loading} />
        </section>
      </main>
    </>
  );
}

export default Register;
