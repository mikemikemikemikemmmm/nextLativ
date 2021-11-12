import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TAction, TState } from "store";

export const useCustomSelector = (propName:keyof TState,cb?:any)=>{
   const value =  useSelector((state:TState)=>state[propName])
   if(cb){
       return cb(value)
   }
   return value
}

export const useCustomDispatch = ()=>{
    return useDispatch() as Dispatch<TAction>
 }
 