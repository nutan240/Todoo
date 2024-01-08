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
        className="resize-y border-2 rounded my-1 w-full focus:outline-none h-auto  "
        value={input}
        onKeyDown={handleKeyPress}
        onChange={handleInputChange}
        placeholder="your task..."
      />
 

    </>
  );
}

export default Input;
