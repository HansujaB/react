import React , {useId} from 'react'
//creating reusable input box component
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency="usd",
  amountDisable=false,
  currencyDisable=false,
  className=""}) {
    const amountInputId=useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
        //we are creating a unique id because we are using this input in two places and we need to differentiate them
        //useId hook is used to create a unique id for each instance of the component and it will not change on re render
           id={amountInputId}
           className="outline-none w-full bg-transparent py-1.5"
           type="number"
           placeholder="Amount"
           disabled={amountDisable}
           value={amount}
           //for check if onAmountChange is passed as a prop
           //if it is passed then we will call it with the value of the input
           //returns a string convert to number 
           onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
         />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}>
                  {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                          {currency}
                  </option>
                  ))

                  }
                </select>
        </div>
    </div>
  )
}

export default InputBox;
