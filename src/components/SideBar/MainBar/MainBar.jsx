import styled from "styled-components";
import { useBar } from "../../../hooks/Bar/useBar";

import SubBar from "../SubBar/SubBar";
import { useEffect } from "react";
import useOpen from "../../../hooks/Open/useOpen";

export default function MainBar({title,subMenus,selectedSub,setSelectedSub}){

    const [bar,changeBar] = useBar();

    useEffect(()=>{
        if(title === '시작 가이드'){
            changeBar();
        }
    },[title])
    
    return(
        <>
        <Bar onClick={()=>{changeBar()}}>
            <span>{title}</span>
            <img src = {bar ? "../../../assets/opened.png" : "../../../assets/closed.png"}></img>
        </Bar>
        {bar ? (<Subs>
            {
            subMenus.map((item)=>(
                <SubBar subtitle={item.subName} 
                isSelected={selectedSub === item.subName}
                onclick={() => {setSelectedSub(item.subName)}}></SubBar>
            ))
            }
        </Subs> ): null}
        </>
    )
}

const Bar = styled.div`
    width : 95%;
    height : 2.2rem;
    background-color : #232031;
    color : white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left:8%;
    border-radius:7px;
    margin-top:10%;
    font-size:0.85rem;
    cursor : pointer;
    user-select: none;

    @media(max-width : 800px){
        padding-left:2%;
        height : 2.4rem;
        margin-top:2%;
    }
`

const Subs = styled.div`
    width : 100%;
    user-select: none;
`