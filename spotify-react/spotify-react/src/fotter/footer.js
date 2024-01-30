import React, { useEffect, useRef, useState } from "react";
import '../vars.css';
import '../reset.css';
import './fotter.css';

const Fotter = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <h1>Testar o premium de graça</h1>
                <p>Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</p>
            </div>
            <div className="footer__button">
                <button>
                    <span>Inscreva-se grátis</span>
                </button>
            </div>
        </div>
    )
}

export default Fotter;