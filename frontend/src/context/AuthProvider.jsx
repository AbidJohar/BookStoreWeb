import { createConnection } from 'mongoose'
import React, { createContext, useContext, useState } from 'react'

export const authContext = createContext()
export default function({children}){
    const initialAuthuser = localStorage.getItem('user');
    const [Authuser, setAuthuser] = useState(
        initialAuthuser? JSON.parse(initialAuthuser) : undefined
    )
    return(
        <authContext.Provider value={[Authuser,setAuthuser]}>
            {children}
        </authContext.Provider>
    )
}
export const useAuth = ()=> useContext(authContext);
