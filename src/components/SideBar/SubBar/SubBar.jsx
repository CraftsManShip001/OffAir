import { useState } from "react";
import { useBar } from "../../../hooks/Bar/useBar";
import styled from "styled-components";

export default function SubBar({subtitle,isSelected,onclick}){

    const [bar,changeBar] = useBar();
    return(
        <>
        <Sub bar = {bar} onClick={()=>{changeBar(); window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }); onclick()}} isSelected={isSelected}>{subtitle}</Sub>
        </>
    )
}

const Sub = styled.div`
    width : 100%;
    height : 1.75rem;
    background-color : ${(props) => (props.isSelected ? "#3C3559" : null)};
    color : ${(props) => (props.isSelected ? "white" : "#999999")};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left:8%;
    padding-top:0.5%;
    padding-bottom:0.5%;
    border-radius:7px;
    margin-top:3%;
    font-size:0.85rem;
    margin-left:10%;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.isSelected ? "#3C3559" : "#161517")};
        color:white;
    }
`