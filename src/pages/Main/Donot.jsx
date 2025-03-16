import * as S from '../docs/styles/style.jsx';
import styled from 'styled-components';

export default function Donot(){
    return(
        <Container>
            <Alert>더 큰 화면으로 접속해주세요</Alert>
        </Container>
    )
}

const Container = styled.div`
    background-color:#222222;
    width:100vw;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`


const Alert = styled.div`
    color:white;
    font-size:4rem;
    text-align:center;
`