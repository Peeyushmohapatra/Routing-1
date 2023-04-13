import { createContext,useContext,useState } from "react";

const Context = createContext();
export const CustomContext = () => {
  return useContext(Context)
}
    


function ContextFn({children}){
    const [state,setState] = useState(false);

    return (
        <Context.Provider value={{state,setState}}>
            {children}
        </Context.Provider>
    )
}

export default ContextFn;