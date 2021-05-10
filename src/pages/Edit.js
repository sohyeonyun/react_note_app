import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Header from '../components/Header';
import Title from '../components/Title';
import Note from '../components/Note';
import Button from '../components/Button';

import logout from '../functions/logout';

import left_arrow_icon from '../assets/left_arrow.png';
import delete_icon from '../assets/delete.png';
import edit_icon from '../assets/edit.png';
import pen_icon from '../assets/pen.png';

import './edit.css';

function Edit({history}) {
  const [input, setInput] = useState('');

  function handleInput(e) {
    setInput(e.target.value);
  }
  function handleLogout() {
    if (!window.confirm('로그아웃 하시겠습니까?')) {
      return;
    }

    logout((success) => {
      if (success) {
        alert('로그아웃 되었습니다');
        history.push('/login');
      } else {
        // 로그아웃 실패했을 때
      }
    });
  }

  return (
    <>
      <Header button_text='로그아웃' onClick={handleLogout} />
      <main>
        <div className='goback-wrapper'>
          <Link to='/' className='goback-box'>
              <img className='goback-icon' src={left_arrow_icon} alt='뒤로가기 아이콘' />
              <div className='goback-text'>뒤로가기</div>
          </Link>
        </div>
        <section className='edit__note-section'>
          <Title
            icon={pen_icon}
            title='노트 수정하기'
            button_icon={delete_icon}
            button_text='삭제하기'
          />
          <Note value={input} onChange={handleInput} />
          <Button icon={edit_icon} text='수정하기' />
        </section>
      </main>
    </>
  );
}

export default Edit;
