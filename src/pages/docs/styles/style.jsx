import styled from "styled-components";

export const Container = styled.div`
    background-color:#222222;
    width:100vw;
    height:auto;
    margin-top:6.75rem;
    @media(max-width : 800px){
        margin-top:6rem;
    }
`

export const Docs = styled.div`
    color:white;
    margin-left:20%;
    margin-top:3%;
    font-weight:200;
    font-size:1.2rem;
    float:left;
    width:75%;

    @media(max-width : 800px){
        margin-left : 5%;
        font-size: 0.9rem;
        width:90%;
    }

`

export const SideBar = styled.div`
    width:15%;
    height:100%;
    float:left;
    margin-left:1%;
    position:fixed;
    max-height: 80vh;
    overflow-y: auto;
    overflow-y: auto;
    @media(max-width : 800px){
        width:95%;
        height:${(props) => (props.open ? "100%" : "0%")};;
        opacity: ${(props) => (props.open ? "1" : "0")};
        transition: height 1s ease-in-out, opacity 1s ease-in-out;
        margin-left:3%;
    }
`

export const Button = styled.div`
    width:20%;
    height:2rem;
    text-align:center;
    margin-left:5%;
    color : white;
    margin-bottom:5%;
    border-radius : 3px;
    background-color : #3C3559;
`