import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    //alternate method used now - no delays renders on 1st time
    const data=useLoaderData()

    //old method
    // const [data, setData]= useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/HansujaB')
    //         .then((res) => res.json())
    //         .then((data) => setData(data))
    // }, []);
    return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response= await fetch("https://api.github.com/users/HansujaB")
    return response.json() //returns a promise
}
