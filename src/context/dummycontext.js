// import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/dummyReducer";

const DummyContext  = createContext();

 const Base_url = "https://dummyjson.com/products";

 const initalState = {
    isLoading :false,
    isError : false,
    dummyproduct : [],

 }

const DummyProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,initalState);

    const dummyproduct = async (url)=>{
        dispatch({type:"Dummy_Api_Loading"})
            try {
                const res = await fetch(url);
                const dummyproduct = await res.json();
                dispatch({type:"Dummy_Api_Data",payload:dummyproduct})
                
            } catch (error) {
                dispatch({type:"Dummy_Api_Error"})
            }
    }

    useEffect(()=>{
        dummyproduct(Base_url);
    },[])


    return (
    <DummyContext.Provider value={{...state}}>
    {children}
    </DummyContext.Provider>
    );
};

const useDummyContext = ()=>{
    return useContext(DummyContext)
}

export {DummyProvider,DummyContext,useDummyContext};