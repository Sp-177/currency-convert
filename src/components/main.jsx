import React from 'react'
import InputBox from './InputBox';
import { useState } from 'react';
import useCurrencyinfo from './hooks/useCurrencyinfo';
function Main() {
  const[amount,setAmount]=useState(0);
  const[from,setFrom]=useState("usd");
  const[to,setTo]=useState("inr");
  const[convertedAmount,setConvertedAmount]=useState(0);
  const currencyinfo=useCurrencyinfo(from);
  const options =Object.keys(currencyinfo);
  
  
  const convert=()=>{setConvertedAmount(amount*currencyinfo[to]);}
  const swap=()=>{
    
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  
  return (
    <>
    <div className='main'>
    <div >
      <InputBox label='from' amount={amount} currencyOptions={options} onCurrencyChange={(currency)=>{setFrom(currency)}} onAmountChange={(money)=>{setAmount(money)}} selectCurrency={from}></InputBox>
    </div>
    <button id='swap' onClick={()=>{swap()}} >Swap</button>
    <div>
      <InputBox label='to' amount={convertedAmount.toFixed(2)} currencyOptions={options} onCurrencyChange={(currency)=>{setTo(currency)}} selectCurrency={to} amountDisable={true}></InputBox>
    </div>
    <button id="convert" onClick={convert}>Convert {from.toUpperCase} to {to.toUpperCase}</button>
    </div>
    </>
  )
}

export default Main;
