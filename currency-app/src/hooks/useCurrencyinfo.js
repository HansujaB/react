import { useState , useEffect } from "react";
//fn of this hook is to fetch currency info from an api and convert it to json and return it 
function useCurrencyInfo(currency){
    const[data, setData]=useState({})
    //api call
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res)=> setData(res[currency]))
        console.log(data)
    }, [currency])
    return data
}

export default useCurrencyInfo;