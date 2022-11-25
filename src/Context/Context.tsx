import React, { createContext, useState } from 'react';

export const Context = createContext({
  isAuth: false,
  activateAuth: () => { },
  deactivateAuth: () => { }

})

const Provider = ({ children }: any) => {
  const initialState = window.localStorage.getItem('auth')
  const [isAuth, setIsAuth] = useState(Boolean(initialState))

  const value = {
    isAuth,
    activateAuth: () => { setIsAuth(true) },
    deactivateAuth: () => { setIsAuth(false) }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}   