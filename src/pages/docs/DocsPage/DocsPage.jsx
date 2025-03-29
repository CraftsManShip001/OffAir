import '../../../App.css';
import NavMenu from '../../../components/Nav/Nav.jsx';
import { MDXProvider } from "@mdx-js/react";
import MainBar from '../../../components/SideBar/MainBar/MainBar.jsx';
import { useState,useEffect } from 'react';
import * as S from '../styles/style.jsx';
import useWidthStore from '../../../stores/useWidthStore.js';
import {StartMenu,GearMenu,SoftwareMenu} from './Docs.js';
import useOpenStore from '../../../stores/useOpenStore.js';

export default function DocsPage(){

    const [CurrentDocs, setCurrentDocs] = useState('소개');
    const [selectedSub, setSelectedSub] = useState('소개'); // 선택된 메뉴 추적함

    const {widthsize} = useWidthStore();
    const {open,changeOpen} = useOpenStore();

    const loadGuide = (folder,docsName) => {
        import(`../../../components/docsMDX/${folder}/${docsName}.mdx`)
        .then((module) => {
            setCurrentDocs(() => module.default);
        });
    };

    useEffect(() => {
        loadGuide('Start','소개');
      }, []);

    useEffect(() =>{

        const startSubExists = StartMenu.some(item => item.subName === selectedSub);
        const SoftSubExists = SoftwareMenu.some(item => item.subName === selectedSub);
        const GearsubExists = GearMenu.some(item => item.subName === selectedSub);

        if(startSubExists){
            loadGuide('Start', selectedSub);
        }
        else if(SoftSubExists){
            loadGuide('Software', selectedSub);
        }
        else if(GearsubExists){
            loadGuide('Gear', selectedSub);
        }
    },[selectedSub])

    return(
        <>
            <S.Container>
                <NavMenu></NavMenu>
                { widthsize > 800 ? 
                <S.SideBar>
                    <MainBar title={'시작 가이드'} subMenus={StartMenu} 
                    selectedSub = {selectedSub} 
                    setSelectedSub = {setSelectedSub}></MainBar>
                    <MainBar title={'방송 소프트웨어'} subMenus={SoftwareMenu} 
                    selectedSub = {selectedSub} 
                    setSelectedSub = {setSelectedSub}></MainBar>
                    <MainBar title={'통합 방송장비'} subMenus={GearMenu} 
                    selectedSub = {selectedSub} 
                    setSelectedSub = {setSelectedSub}></MainBar>
                </S.SideBar> : (
                    <>
                    <S.Button onClick={changeOpen}>펼쳐보기</S.Button>
                    <S.SideBar open = {open}>
                                <MainBar title={'시작 가이드'} subMenus={StartMenu} 
                                selectedSub = {selectedSub} 
                                setSelectedSub = {setSelectedSub}></MainBar>
                                <MainBar title={'방송 소프트웨어'} subMenus={SoftwareMenu} 
                                selectedSub = {selectedSub} 
                                setSelectedSub = {setSelectedSub}></MainBar>
                                <MainBar title={'통합 방송장비'} subMenus={GearMenu} 
                                selectedSub = {selectedSub} 
                                setSelectedSub = {setSelectedSub}></MainBar>
                            </S.SideBar> 
                    
                    </>
                )}
                <MDXProvider components={{}}>
                    <S.Docs>
                        {CurrentDocs ? (widthsize>800 ? <CurrentDocs/> : open ? null : <CurrentDocs/>): <p>로딩 중...</p>}
                    </S.Docs>
                </MDXProvider>
            </S.Container>
        </>
    )
}
