import styled from "styled-components";
import { useBar } from "../../../hooks/Bar/useBar";
import { useState } from "react";
import Closed from '../../../assets/closed.png';
import Opened from '../../../assets/opened.png';

import SubBar from "../SubBar/SubBar";

export default function MainBar({title,subMenus,selectedSub,setSelectedSub}){

    const [bar,changeBar] = useBar();

    return(
        <>
        <Bar onClick={()=>{changeBar()}}>
            <span>{title}</span>
            <img src = {bar ? Opened : Closed}></img>
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
    width : 100%;
    height : 2.5%;
    background-color : #232031;
    color : white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left:8%;
    border-radius:7px;
    margin-top:3%;
    font-size:0.85rem;
`

const Subs = styled.div`
    width : 100%;
`