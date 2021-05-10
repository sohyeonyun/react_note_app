import React from 'react';

import './note.css';

const Note = ({placeholder, value, onChange}) => {
  /**
   * placeholder: <input> 태그의 placeholder (기본 속성)
   */
  return (
    <textarea
      className='Note__input'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Note;
