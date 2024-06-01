import React from 'react'
import InputBox from './InputBox';

function Main() {
  return (
    <>
    <div className='main'>
    <div >
      <InputBox></InputBox>
    </div>
    <button id='swap'>Swap</button>
    <div>
      <InputBox></InputBox>
    </div>
    <button id="convert">Convert</button>
    </div>
    </>
  )
}

export default Main;
