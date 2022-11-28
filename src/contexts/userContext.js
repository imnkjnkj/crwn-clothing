import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
//as the actual you want to access
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=> null,

})

export const UserProvider =({children})=>{
    const [currentUser,setCurrentUser] = useState(null);
    useEffect(()=>{
        const unsubcribe = onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
            console.log(user);
        })
        return unsubcribe;
    },[])
    
    const value = {currentUser,setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}