import { createContext ,useContext, useEffect, useState} from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{

    const [token,setToken] = useState(localStorage.getItem("token"))
    const [user , setUser] = useState({})
    const [services , setServices] = useState([])

    const storeTokenInLS = (serverToken) =>{
        setToken(serverToken)
        return localStorage.setItem("token",serverToken)

    }

    let isLoggedIn = !!token
    console.log("isLoggedIn" , isLoggedIn)

    // tackling logout functionality
    const LogoutUser =() =>{
        setToken("")
        return localStorage.removeItem("token")
    }

    // JWT Authentication-to get current login data
    const userAuthentication = async() =>{
        try {
            const response = await fetch("http://localhost:5000/api/auth/user",
                {
                    method:"GET",
                    headers:{
                        Authorization:`Bearer ${token}`   
                    }
                }

            )

            if(response.ok)
            {
                const data = await response.json()
                console.log("user data ", data.userData)
                setUser(data.userData)
                
            }

        } catch (error) {
            console.error("Error fetching user data")
        }
    }

    //to fetch services data from backend
    const getServices = async()=>{
        try {
            const response = await fetch("https://code-x-sigma.vercel.app/api/data/service" , {
                method:"GET",
            })

            if(response.ok)
            {
                const data = await response.json()
                setServices(data.msg)
            }
        } catch (error) {
            console.log(`services ${error}`)
        }
    }

    useEffect(()=>{
        getServices()
        userAuthentication()
    },[token])

    return <AuthContext.Provider value={{isLoggedIn,storeTokenInLS,LogoutUser , user , services}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () =>{
    const authContextValue = useContext(AuthContext)
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider")

    }
    return authContextValue
}

