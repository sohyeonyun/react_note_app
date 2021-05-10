import React from 'react';

import './button.css';

const Button = ({icon, text, onClick, loading}) => {
  /**
   * icon: 버튼 아이콘 (선택, optional)
   * text: 버튼 텍스트 (필수, required)
   * onClick: 버튼을 눌렀을 때 실행될 함수 (필수)
   * loading: 버튼 로딩 중인지 아닌지
   */
  return (
    <button className='Button__normal-button' onClick={onClick} disabled={loading}>
      {
        icon && (
          <img className='Button__icon' src={icon} alt='작성하기 아이콘'/>
        )
      }      
      <div className='Button__text'>{text}</div>
    </button>
  );
}

export default Button;
