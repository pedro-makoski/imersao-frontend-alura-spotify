import React, { useEffect, useRef, useState } from 'react';
import './reset.css';
import './App.css';
import Header from './header/header';
import SideBar from './sidebar/sidebar';
import Fotter from './fotter/footer';
import Main from './main/main';


function App() {
  const [estaabertaasidebar, setEstaabertaasidebar] = useState(false)

  const AlternarSidebar = () => {
    setEstaabertaasidebar(!estaabertaasidebar)
  }

  const [displaynone, setDisplaynone] = useState(false)

  const foot = useRef(null)

  function alternarsaidadofotter(e){
    if (foot.current && !foot.current.contains(e.target)){
      setDisplaynone(true)
    }
  }

  useEffect(() => {
      document.addEventListener('click', (e) => {
        alternarsaidadofotter(e)
      
  
      return () => {
        document.removeEventListener('click',(e) => {
          alternarsaidadofotter(e)
        });
      };
    })
  }, [])

  const [valordoinput, setValordoinput] = useState('')

  function mudarvalordoinput(value){
    setValordoinput(value)
  }

  return (
      <div>
        <header>
          <SideBar alternarsidebar={AlternarSidebar} estaaberta={estaabertaasidebar}/>
          <Header  alternarsidebar={AlternarSidebar} onInputChange={mudarvalordoinput}/>
        </header>
        <main>
          <Main valordoinput={valordoinput}/>
        </main>
        <footer style={{display: displaynone ? 'none' : 'block'}} ref={foot}>
          <Fotter className="foot"/>
        </footer>
      </div>
  );
}

export default App;