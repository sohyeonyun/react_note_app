import React from 'react';

import './title.css';

const Title = ({icon, title, button_icon, button_text}) => {
  /**
   * icon: 타이틀 왼쪽 아이콘
   * title: 타이틀 제목 텍스트
   * button_icon: 타이틀 오른쪽 버튼 아이콘
   * button_text: 타이틀 오른쪽 버튼 텍스트
   */
  return (
    <div className='Title__container'>
      <div className='Title__title-wrapper'>
        <img className='Title__title-icon' src={icon} alt='작성하기' />
        <div className='Title__title'>{title}</div>
      </div>
      {
        button_text && (
          <button className='Title__button-wrapper'>
            <img className='Title__button-icon' src={button_icon} alt='삭제하기' />
            <div className='Title__button-text'>{button_text}</div>
          </button>
        )
      }
    </div>
  );
}

export default Title;
