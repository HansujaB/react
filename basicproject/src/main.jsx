import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//we can create the fn here itself <MyApp/> or MyApp() (not recommended)
function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

//we used thid and we have to create custom render but since we are using react render we cant do like this 
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }


//this is a object  anotherElement  and it will work it will pare everything on its own 
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)


//we can use it like {another user}
const anotherUser = "chai aur react"


//it is a object will be used like that taked a set of values in this order only 
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
