import React from 'react'

function Input({handleInputChange ,input}) {
  return (
    <>
         <textarea 
          className="resize-y border-2 rounded my-1 w-full focus:outline-none h-auto max-h-32 overflow-y-auto "
          type="text" value={input}
          onChange={handleInputChange}
          placeholder="your task..."
          
        />
    </>
  )
}

export default Input;