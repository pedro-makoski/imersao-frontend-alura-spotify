import React, { useEffect, useState } from "react";
import '../reset.css'
import '../vars.css'
import './header.css'
import arrowLeft from '../assets/icons/small-left.png'
import arrowRight from '../assets/icons/small-right.png'
import search from '../assets/icons/search.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Header = ({alternarsidebar, onInputChange}) => {
    const [valordoinput, setValordoinput] = useState('')

    onInputChange(valordoinput)

    const alternarvalordoinput = (e) => {
        setValordoinput(e.target.value)
        onInputChange(e.target.value)
    }

    return (
        <div className="main__container">
            <nav className="header__navigation">
                <div style={{display:"flex", flexDirection:"row"}}>
                    <div className="open-sidebar">
                        <button className="botao-hamburguer" onClick={alternarsidebar}>
                            <FontAwesomeIcon icon={faBars} className="fa fa-bars" />
                        </button>
                    </div>
                    <div className="navigation">
                        <button className="arrow-left">
                            <img src={arrowLeft} alt="imagem de uma seta para esquerda que parece uma chave angular" />
                        </button>
                        <button className="arrow-right">
                            <img src={arrowRight} alt="imagem de uma seta para a direita que parece uma chave angular" />
                        </button>
                    </div>
                </div>

                <div className="header__search">
                    <img src={search} alt="" />
                    <input id="search-input" type="text" maxLength="800" placeholder="O que você quer ouvir?" className="input" value={valordoinput} onChange={alternarvalordoinput}/>
                </div>
                
                <div className="header__login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
            </nav>
        </div>
    )
}

export default Header;