import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const increasevalue = () => {
    return setCounter(counter + 1);
  }
  const decreasevalue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <div className='items-center bg-indigo-100  '>
        <p className='m-4'>{counter}</p>
        <div className='flex '>
          <button className='border-black border-2 px-6 m-2 bg-sky-500/75 rounded-md	' onClick={increasevalue}>Increase</button><br />
          <button className={counter == 0 ? 'border-black border-2 px-6 text-slate-200 m-2' : 'border-black border-2 px-6 m-2 bg-sky-500/75 rounded-md	'} disabled={counter == 0} onClick={decreasevalue}>Decrease</button>
        </div>
      </div>
    </>
  )
}

export default App
