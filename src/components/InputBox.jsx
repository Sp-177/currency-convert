import React from 'react'

function InputBox({label="From",amount,onAmountChange,onCurrentChange,currencyOptions=[],selectCurrency="usd",}) {
  return (
   <>
   <div className='input'>
        <div className='col'>
            <label>
                {label}
            </label>
            <input className='box' type='number' value={amount}></input>

        </div>
        <div className='col'>
        <label>
                Currency Type
            </label>
            <select className='box'>
                <option >
                    usd
                </option>
            </select>
        </div>
   </div>
   </>
  )
}

export default InputBox
