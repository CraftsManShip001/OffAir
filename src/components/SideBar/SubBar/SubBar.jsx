import { useBar } from "../../../hooks/Bar/useBar";
import styled from "styled-components";
import useOpenStore from "../../../stores/useOpenStore";
import useWidthStore from "../../../stores/useWidthStore";

export default function SubBar({subtitle,isSelected,onclick}){

    const [bar,changeBar] = useBar();
    const {widthsize} = useWidthStore();
    const {changeOpen} = useOpenStore();

    return(
        <>
        <Sub bar = {bar} onClick={()=>{changeBar(); window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }); onclick(); 
        if(widthsize <= 800) {
            changeOpen()};
        }} isSelected={isSelected}>{subtitle}</Sub>
        </>
    )
}

const Sub = styled.div`
    width : 83%;
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
    @media(max-width : 800px){
        width:90%;
        margin-top:2%;
        padding-left:2%;
        margin-left:5%;
    }
`