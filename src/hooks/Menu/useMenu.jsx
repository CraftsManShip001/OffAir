import { useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
export function useMenu(){
    const location = useLocation();
    const navigate = useNavigate();

    const [menu,setMenu] = useState('main');

    const changeMenu = (clicked) => {
        navigate('/' + clicked);
    };

    useEffect(() => {
        setMenu(location.pathname.replace('/', '') || 'main');
    }, [location]);

    return [menu,changeMenu];
}