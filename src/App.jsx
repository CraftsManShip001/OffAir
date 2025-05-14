import './App.css';
import {Routes,Route} from "react-router-dom";
import Main from './pages/Main/Main.jsx';
import PlusPage from './pages/Plus/PlusPage.jsx';
import { useEffect, useState } from 'react';
import { create } from 'zustand';

import DocsPage from './pages/docs/DocsPage/DocsPage.jsx';



function App() {
  // useEffect(()=>{
  //   console.log(widthsize)
  // },[widthsize])

  return (
    <Routes>
      <Route path = '/' element = {<Main></Main>}></Route>
      <Route path = '/main' element = {<Main></Main>}></Route>
      <Route path = '/docs' element = {<DocsPage></DocsPage>}></Route>
      <Route path = '/plus' element = {<PlusPage></PlusPage>}></Route>
    </Routes>
  ); // test
}

export default App;
