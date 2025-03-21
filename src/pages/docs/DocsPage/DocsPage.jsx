import '../../../App.css';
import NavMenu from '../../../components/Nav/Nav.jsx';
import { MDXProvider } from "@mdx-js/react";
import MainBar from '../../../components/SideBar/MainBar/MainBar.jsx';
import { useState,useEffect } from 'react';
import * as S from '../styles/style.jsx';

export default function DocsPage(){

    const [CurrentDocs, setCurrentDocs] = useState('소개');

    const [selectedSub, setSelectedSub] = useState('소개'); // 선택된 메뉴 추적함

    const loadGuide = (folder,docsName) => {
        import(`../../../components/docsMDX/${folder}/${docsName}.mdx`)
        .then((module) => {
            console.log(module);
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
        else{
            console.log(selectedSub);
        }
    },[selectedSub])


    const StartMenu = [
        {subName:'소개'},
        {subName:'규칙'}
    ]

    const SoftwareMenu = [
        {subName:'명칭 및 기능'},
        {subName:'시스템 상태표시'}
    ]

    const GearMenu = [
        {subName:'기능 설명'},
        {subName:'입출력 신호 연결'},
        {subName:'프로그램 실행'},
        {subName:'원격'},
        {subName:'단문 메시지 송출'},
        {subName:'동영상 녹화'},
        {subName:'배경 오디오 설정'},
        {subName:'예약 송출'},
        {subName:'외부장비 제어'},
        {subName:'이미지,PPT 송출'},
        {subName:'입력 출력 설정'},
        {subName:'입출력 바이패스 설정'},
        {subName:'AUDIO MIXER'},
        {subName:'LIVE 입력 영상 송출'},
        {subName:'NET & USB'},
        {subName:'PC 화면 송출'},
        {subName:'Play List 순서 송출'},
        {subName:'VIDEO MIXER'}
    ]
      
    
    return(
        <>
            <S.Container>
                <NavMenu></NavMenu>
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
                </S.SideBar>
                <MDXProvider components={{}}>
                    <S.Docs>
                        {CurrentDocs ? <CurrentDocs/> : <p>로딩 중...</p>}
                    </S.Docs>
                </MDXProvider>
            </S.Container>
        </>
    )
}
