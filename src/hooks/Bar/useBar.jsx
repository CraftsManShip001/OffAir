import { useState } from "react";

export function useBar(){
    const [bar,setBar] = useState(false);
    
    const changeBar = ()=>{
        if(bar) setBar(false);
        else setBar(true);
    }

    return [bar,changeBar]

}