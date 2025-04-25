import { createContext,useState } from "react";
import { initialSignInFormData, initialSignUpFormData } from "@/config";
export const AuthContext=createContext(null);

export default function AuthProvider({children}){

    const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
    const [auth, setAuth] = useState({
      authenticate: false,
      user: null,
    });
    const [loading, setLoading] = useState(true);
  

    return <AuthContext.Provider  value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        // handleRegisterUser,
        // handleLoginUser,
        // auth,
        // resetCredentials,
    }}>{children}</AuthContext.Provider>
}