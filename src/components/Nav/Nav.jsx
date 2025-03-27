import styled from "styled-components";
import { useMenu } from "../../hooks/Menu/useMenu";

export default function Nav() {
    const [menu,changeMenu] = useMenu('main');

    return (
        <NavMenu>
            <LogoContainer>
                <img onClick={()=>changeMenu('main')} isClicked={menu === 'main'} src={"../../assets/offairLogo.png"} width={150}></img>
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
    position : fixed;
    align-items: center;
    justify-content: space-between;
    width:100%;
    height: 6.5rem;
    padding: 0 2%;
    top:0;
    z-index: 1000;

`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right:5rem;
`;

const Menu = styled.a`
    font-size: 20px;
    color: ${(props) => (props.isClicked ? "white" : "#999999")};;
    font-family: "Pretendard-Regular";
    margin-left: 40px;
    &:hover {
        color: #ffffff;
    }
    user-select: none;
`;
