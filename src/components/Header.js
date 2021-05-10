import React from 'react';

import './header.css';

const Header = ({button_text, onClick}) => {
  /**
   * 비구조화 할당
   * ({button_text})와
   * (props) => { const button_text = props.button_text },
   * (props) => { const {button_text} = props },
   * 위의 3가지는 모두 같은 역할
   */
  return (
    <header>
      <div className='Header__content'>
        <div className='Header__title'>노트앱</div>
        <button className='Header__button' onClick={onClick}>{button_text}</button>
      </div>
    </header>
  );
}

export default Header;
