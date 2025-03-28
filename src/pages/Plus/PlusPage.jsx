import '../../App.css';
import styled from "styled-components";
import NavMenu from '../../components/Nav/Nav.jsx';
import { MDXProvider } from "@mdx-js/react";
import PlusDocs from '../../components/plus/plusDocs.mdx';

export default function PlusPage(){
    return(
        <>
            <Container>
                <NavMenu></NavMenu>
                <MDXProvider components={{}}>
                    <Docs>
                        <PlusDocs></PlusDocs>
                    </Docs>
                </MDXProvider>
            </Container>
        </>

    )
}

const Container = styled.div`
    background-color:#222222;
    width:100vw;
    height:auto;
    margin-top:10rem;
    @media(max-width:800px){
        margin-top:8rem;
    }
`

const Docs = styled.div`
    color:white;
    margin-left:7%;
    margin-top:3%;
    font-weight:200;
    font-size:1.2rem;
    width:78%;

     @media(max-width:800px){
        font-size : 0.9rem;
    }

`