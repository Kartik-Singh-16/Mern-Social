import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
      _id: "6489cc93b21e38531707cf24",
      username:"john",
      email:"john@gmail.com",
      password:"$2b$10$wTpF4dE/0nSpnko1ISN0Xuy.zCtKRl7vqkn8YSIkia6RV6HZQupS2",
      profilePicture:"person/1.jpeg",
      coverPicture:"",
      isAdmin: false,
      followers:[],
      followings:[],
    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
//   useEffect(()=>{
//     localStorage.setItem("user", JSON.stringify(state.user))
//   },[state.user])
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
