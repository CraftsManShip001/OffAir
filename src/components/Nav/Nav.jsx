import styled from "styled-components";
import { useMenu } from "../../hooks/Menu/useMenu";
import useWidthStore from "../../stores/useWidthStore";
import useOpenStore from "../../stores/useOpenStore";

export default function Nav() {
    const [menu,changeMenu] = useMenu('main');
    const {widthsize} = useWidthStore();
    const {open,changeOpen} = useOpenStore();
    const menus = ['main', 'docs', 'plus'];
    return (
        <NavMenu>
            <LogoContainer>
                <img 
                    style={{ cursor: 'pointer' }} 
                    onClick={() => changeMenu('main')} 
                    isClicked={menu === 'main'} 
                    src="../../assets/offairLogo.png" 
                    width={widthsize > 800 ? 150 : 80}
                />
            </LogoContainer>
            <MenuContainer isDocs={menu === 'docs'}>
                {menus.map((m) => (
                    <Menu 
                        key={m} 
                        onClick={() => changeMenu(m)} 
                        $isClicked={menu === m} 
                    >{m}</Menu>
                ))}
            </MenuContainer>
            {widthsize <= 800 && menu === 'docs' ? <img style = {{marginRight:"8%", transition:"all 1s ease-in-out"}} src = {open ? '/assets/X.svg' : '/assets/menu.svg'} onClick={changeOpen}></img> : null}
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
        margin-right:${(props) => (props.isDocs ? '1rem' : '3rem')};
    }
`;

const Menu = styled.div`
    font-size: 1.2rem;
    color: ${({ $isClicked }) => ($isClicked ? "white" : "#999")};
    font-family: "Pretendard-Regular";
    margin-left: 2.5rem;
    &:hover {
        color: #ffffff;
    }
    user-select: none;
    cursor : pointer;

    @media (max-width: 800px){
        font-size : 1rem;
        margin-left:1.75rem;
    }
    
`;