import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(0);

  const update = () => {
    return setData(data + 1);
  }
  const dec = () => {
    if (data > 0) {
      setData(data - 1);
    }
  }
  return (
    <>
      <p>{data}</p>
      <div className='flex '>
        <button className='border-black border-2 px-6 m-2' onClick={update}>increase</button><br />
        <button className={data==0 ? 'border-black border-2 px-6 text-slate-200 m-2':'border-black border-2 px-6 m-2'} disabled={data == 0} onClick={dec}>decrease</button>
      </div>
    </>
  )
}

export default App
