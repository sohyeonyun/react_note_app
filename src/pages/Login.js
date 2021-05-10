import React, {useState} from 'react';

import Input from '../components/Input';
import Button from '../components/Button';
import Header from '../components/Header';

import login from '../functions/login';

import user_icon from '../assets/user.png';
import lock_icon from '../assets/lock.png';

import './login.css';

function Login({history}) {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [button_loading, setButtonLoading] = useState(false);

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleNavigation() {
    history.push('/register');
  }

  function handleLogin() {
    if (!email) {
      alert('이메일을 입력해주세요');
      return;
    }
    if (!password) {
      alert('비밀번호를 입력해주세요');
      return;
    }
    
    setButtonLoading(true);
    login(email, password, (success) => {
      if (success) {
        alert('로그인 되었습니다');
        history.push('/');
      } else {
        //로그인 실패했을 때
      }
      setButtonLoading(false);
    });
  }

  return (
    <>
      <Header button_text='회원가입' onClick={handleNavigation} />
      <main>
        <section className='login__login-section'>
          <div className='login__title'>로그인</div>
          <Input placeholder='이메일' icon={user_icon} value={email} onChange={handleEmail} />
          <Input placeholder='비밀번호' icon={lock_icon} value={password} onChange={handlePassword} />
          <Button text='로그인' onClick={handleLogin} loading={button_loading} />
        </section>
      </main>
    </>
  );
}

export default Login;
