import { useEffect, useState } from "react";
import Logo from "../../assets/offairLogo.png";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useMenu } from "../../hooks/Menu/useMenu";

export default function Nav() {
    const [menu,changeMenu] = useMenu('main');

    return (
        <NavMenu>
            <LogoContainer>
                <img onClick={()=>changeMenu('main')} isClicked={menu === 'main'} src={Logo} width={150}></img>
            </LogoContainer>
            <MenuContainer>
                <Menu onClick={()=>changeMenu('main')} isClicked={menu === 'main'}>main</Menu>
                <Menu onClick={()=>{changeMenu('docs')}} isClicked={menu === 'docs'}>docs</Menu>
                <Menu onClick={()=>{changeMenu('plus')}} isClicked={menu === 'plus'}>plus</Menu>
            </MenuContainer>
        </NavMenu>
    );
}

const NavMenu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    padding: 0 2%;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right:60px;
`;

const Menu = styled.a`
    font-size: 20px;
    color: ${(props) => (props.isClicked ? "white" : "#999999")};;
    font-family: "Pretendard-Regular";
    margin-left: 40px;
    &:hover {
        color: #ffffff;
    }
`;
