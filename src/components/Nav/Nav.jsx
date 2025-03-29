import styled from "styled-components";
import { useMenu } from "../../hooks/Menu/useMenu";
import useWidthStore from "../../stores/useWidthStore";

export default function Nav() {
    const [menu,changeMenu] = useMenu('main');
    const {widthsize} = useWidthStore();
    return (
        <NavMenu>
            <LogoContainer>
                {widthsize >= 800 ? <img style = {{cursor: 'pointer'}} onClick={()=>changeMenu('main')} isClicked={menu === 'main'} src={"../../assets/offairLogo.png"} width={150}></img> : <img style = {{cursor: 'pointer'}} onClick={()=>changeMenu('main')} isClicked={menu === 'main'} src={"../../assets/offairLogo.png"} width={80}></img>}
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

    @media(max-width : 800px){
        height:4.5rem;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right:5rem;
    @media(max-width : 800px){
        margin-right:3rem;
    }
`;

const Menu = styled.a`
    font-size: 1.2rem;
    color: ${(props) => (props.isClicked ? "white" : "#999999")};;
    font-family: "Pretendard-Regular";
    margin-left: 2.5rem;
    &:hover {
        color: #ffffff;
    }
    user-select: none;
    cursor : pointer;

    @media (max-width: 800px){
        font-size : 1rem;
        margin-left:
    }
    
`;