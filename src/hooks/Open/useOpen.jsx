import { useState } from "react";

export default function useOpen(){
    const [open,setOpen] = useState(false);
    
    const changeOpen = ()=>{
        if(open) setOpen(false);
        else setOpen(true);
    }

    return [open,changeOpen]

}