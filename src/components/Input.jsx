import React, { useEffect, useRef } from 'react';

function Input({ handleInputChange, input, handleKeyPress }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [input]);

  return (
    <>
      <textarea
        ref={textareaRef}
        className="border border-slate-300  rounded-md pl-2 h-8 hover:shadow-lg w-full focus:outline-none "
        value={input}
        onKeyDown={handleKeyPress}
        onChange={handleInputChange}
        placeholder="your task..."
      />
 

    </>
  );
}

export default Input;
