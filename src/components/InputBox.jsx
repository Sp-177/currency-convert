
import React, { useId } from 'react'

function InputBox({label,amount,onAmountChange,onCurrencyChange,currencyOptions,selectCurrency,amountDisable=false}) {
  const amountid=useId();
    return (
    
   <>
   <div className='input'>
        <div className='col'>
            <label htmlFor={amountid}>
                {label}
            </label>
            <input id={amountid} className='box' type='number' value={amount} onChange={(e)=>{onAmountChange(Number(e.target.value))} } readOnly={amountDisable}></input>

        </div>
        <div className='col'>
        <label>
                Currency Type
            </label>
            <select className='box' value={selectCurrency} onChange={(e)=>{onCurrencyChange(e.target.value)}}>
                {currencyOptions.map((currency)=>{
                    return <option  key={currency} value={currency}>{currency}</option>
                })}
            </select>
        </div>
   </div>
   </>
  )
}

export default InputBox
