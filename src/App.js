import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from"./Navbar/Navbar";
import Slogan from"./Slogan/Slogan";
import Content from"./Content/Content";

function App() {
  const [windowSize,setWindowSize]= useState({
    width:undefined,
    height:undefined
  })
  const[isMobile,setMobile]=useState(false);
  useEffect(()=>{
      const handleSize=()=>{
        setWindowSize({
           width: window.innerWidth,
           height: window.innerHeight,
        });
      }
    window.addEventListener("resize",handleSize)
    handleSize()
    return()=>window.removeEventListener("resize",handleSize)
  },[]);
  useEffect(()=>{
     if(windowSize.width<500){
       setMobile(true)
     } 
     else{
       setMobile(false)
     }
  },[windowSize])
  return (
    <div className="App ">
       <div className="overflow-y-auto overflow-x-hidden font-sora h-screen px4 px-4 font-bold underline py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white to-purple-500 text-black dark:text-white md:px-20">
          <Navbar isMobile={isMobile}/>
          <Slogan/>
          <Content/>
       </div>
    </div>
  );
}

export default App;
