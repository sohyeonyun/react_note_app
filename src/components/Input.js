import React from 'react';

import './input.css';

const Input = ({icon, placeholder, type, value, onChange}) => {
  /**
   * icon: 인풋 왼쪽에 들어갈 아이콘
   * placeholder: <input> 태그의 placeholder (기본 속성)
   * type: <input> 태그에 들어갈 내용의 타입 (기본 속성)
   */
  return (
    <div className="Input__box">
      <img className="Input__icon" src={icon} alt="비밀번호 아이콘" />
      <input
        className="Input__input"
        placeholder={placeholder}
        type={type || 'text'} // 타입을 따로 설정해주지 않는 경우에는 Text로 설정
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
