import { useContext , useState , createContext, useEffect  } from "react";

const AuthContext = createContext();
const AuthContextDispatch = createContext();

const AUTH_KEY_NAME = "authState";

const AutProvider = ({children}) => {
    const [isLogin  , setIsLogin] = useState(false);
    useEffect(()=> {
        const uesrData = JSON.parse(localStorage.getItem(AUTH_KEY_NAME)) ||false;
        setIsLogin(uesrData);
    } , []);

    useEffect(()=>{
        localStorage.setItem(AUTH_KEY_NAME , JSON.stringify(isLogin));
    } , [isLogin])

    return ( 
        <AuthContext.Provider value={isLogin}>
            <AuthContextDispatch.Provider value={setIsLogin}>
                {children}
            </AuthContextDispatch.Provider>
        </AuthContext.Provider>
     );
}
 
export default AutProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthAction = () => useContext(AuthContextDispatch);