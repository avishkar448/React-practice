import { createContext, useContext, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{ 

    const [user,setUser]=useState(null)

    const login=(userdata)=>{ 
        setUser(userdata)
    }

    const logout =()=>{ 
        setUser(null)
    }

    return( 
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>{ 
    return useContext(AuthContext)
}