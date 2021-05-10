import React from 'react';

import './memo.css';

const Memo = ({content}) => {
  /**
   * content: 메모에 들어갈 내용
   */
  return (
    <div className='Memo__content'>{content}</div>
  );
}

export default Memo;
