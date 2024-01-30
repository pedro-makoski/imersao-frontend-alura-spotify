import React from "react";
import './playlist.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Playlist = ({link, name, img, color}) => {
    var image = require(`../../${img}`)

    return (
        <a href={link} >
            <div className="musica" style={{backgroundColor: color}}>
                <h3>{name}</h3>
                <img src={image} alt="" />
                <div className="play">
                    <FontAwesomeIcon icon={faPlay} className="fa-play musica-plau fa fa-solid"/>
                </div>
            </div>
        </a>
    )
}

export default Playlist;