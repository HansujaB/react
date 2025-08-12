import React from 'react'
import UserContext from './UserContext'
function UserContextProvider({children}) {
    //user is a global state initialized to null
    //children is the component that will use this context
    //UserContext.Provider is used to provide the user state to the children components
    //setUser is a function to update the user state
    const[user, setUser] = React.useState(null)
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
