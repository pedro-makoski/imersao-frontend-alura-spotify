import React from "react";
import './artista.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Artista_card = ({img, name, categorie, link}) => {
    return (
        <a href={link}>
            <div className="artist-card">
                <div className="card-img">
                    <div class="play-img">
                        <img className="artist-img" src={img}/>
                        <div className="play">
                            <FontAwesomeIcon icon={faPlay} className="fa fa-solid fa-play"/>
                        </div>
                    </div>
                </div>
                <div className="card-text">
                    <p className="artist-name" id="artist-name">{name}</p>
                    <span className="artist-categorie" id="artist-categorie">{categorie}</span>
                </div>
            </div>
        </a>
    )
}

export default Artista_card