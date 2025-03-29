import '../../App.css';
import styled from "styled-components";
import NavMenu from '../../components/Nav/Nav.jsx';
import { MDXProvider } from "@mdx-js/react";
import MainDocs from '../../components/main/mainDocs.mdx';
import * as S from '../docs/styles/style.jsx';

export default function Main() {
    return(
        <>
        <S.Container>
            <NavMenu></NavMenu>
            <MDXProvider components={{}}>
                <Docs>
                    <MainDocs></MainDocs>
                </Docs>
            </MDXProvider>
        </S.Container>
        </>
    )
}


const Docs = styled.div`
    color:white;
    margin-left:7%;
    margin-top:9rem;
    font-weight:200;
    font-size:1.2rem;
    width:78%;

    @media(max-width:800px){
        font-size : 0.9rem;
        margin-top:6.75rem;
    }

`