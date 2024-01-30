import React, {useEffect, useRef} from "react";
import '../reset.css'
import './sidebar.css'
import logospotify from '../assets/icons/logo-spotify-80.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faBook, faPlus, faGlobe, faBars} from '@fortawesome/free-solid-svg-icons'

const SideBar = ({estaaberta, alternarsidebar}) => {
    const minharef = useRef(null);

    useEffect(() => {
        function fecharsidebar() {
            const classes = minharef.current.classList
    
            classes.remove('naoocultar')
            classes.add('ocultar')
        }
    
        function abrirsidebar() {
            const classes = minharef.current.classList
        
            classes.add('naoocultar')
            classes.remove('ocultar') 
        }
    
        if (estaaberta){
            abrirsidebar()
        }else{
            fecharsidebar()
        }
    })

    return (
        <div className="sidebar naoocultar" ref={minharef}>
            <nav className="sidebar_navigation">
                <div className="open-sidebar">
                    <button className="botao-hamburguer" onClick={alternarsidebar}>
                        <FontAwesomeIcon icon={faBars} className="fa fa-bars" />
                    </button>
                </div>
                <div className="logo">
                    <a href="#" target="_self" rel="next">
                        <img src={logospotify} alt="logo do Spotify"  />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="#" target="_self" rel="next">
                            <FontAwesomeIcon icon={faHome} className="fa fa-home" />
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_self">
                            <FontAwesomeIcon icon={faSearch} className="fa fa-search" />
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="sua-bibilioteca">
                <div className="parte-superior">
                    <button className="grande linha">
                        <FontAwesomeIcon icon={faBook} className="fa fa-book" />
                        <h1 style={{marginLeft: '12px'}}>Sua biblioteca</h1>
                    </button>
                    <button className="grande"><FontAwesomeIcon icon={faPlus} className="fa fa-plus" /></button>
                </div>
                <section className="crie-uma-playlist">
                    <div className="crie-uma-playlist__content">
                        <div className="texto-playlist">
                            <h1>Crie sua primeira playlist</h1>
                            <p>É fácil, vamos te ajudar.</p>
                        </div>
                        <button className="crie-a-playlist ripple-playlist" id="playlist-create">
                            <span>Criar uma playlist</span>
                        </button>
                    </div>
                </section>
                <section className="crie-uma-playlist" id="podcast-playlist">
                    <div className="crie-uma-playlist__content">
                        <div className="texto-playlist">
                            <h1>Crie um podcast</h1>
                            <p>É fácil, vamos te ajudar.</p>
                        </div>
                        <button className="crie-a-playlist ripple-playlist-podcast">
                            <span>Criar um podcast</span>
                        </button>
                    </div>
                </section>
                <div className="cookies">
                    <a href="#" target="_self" rel="next">
                        <p className="cookies__content">
                            <small>Cookies</small>
                        </p>
                    </a>
                </div>
                <div className="languages">
                    <button className="languages__button botao-ripple"> 
                    <span><FontAwesomeIcon icon={faGlobe} className="fa fa-globe" /> Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default SideBar;
