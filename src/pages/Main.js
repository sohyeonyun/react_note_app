import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Header from '../components/Header';
import Title from '../components/Title';
import Note from '../components/Note';
import Button from '../components/Button';
import Memo from '../components/Memo';

import logout from '../functions/logout';

import pen_icon from '../assets/pen.png';
import note_icon from '../assets/note.png';

import './main.css';

function Main({history}) {
  /*
    배열 비구조화 할당
    State : input 값 변경은 setInput 사용
    <-> props는 부모로부터 받아온 값이라 컴포넌트에서 못 바꿈.
  */
  const [input, setInput] = useState(''); 
  const [list, setList] = useState([1, 'a']);

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
        <section className='main__note-section'>
          <Title icon={pen_icon} title='작성하기' /> 
          <Note value={input} onChange={handleInput} />
          <Button icon={pen_icon} text='작성하기' />
        </section>
        <section className='main__note-section'>
          <Title icon={note_icon} title='내 노트' />
          <div className='main__note-contents'>
            {
              list.map(() => {
                return (
                  <Link to='/edit'>
                    <Memo content='' />
                  </Link>
                )
              })
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default Main;
