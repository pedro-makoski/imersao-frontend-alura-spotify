import React, { useEffect, useState } from "react";
import './main.css';

import Playlist from "./playlist/playlist";
import Artista_card from './artista/artista'
var varantiga;


const Main = ({valordoinput}) => {
    const url_playlists = "http://localhost:5000/playlists"

    const [Playlists, SetPlaylists] = useState([])


    useEffect(() => {
        fetch(url_playlists)
            .then((response) => response.json())
            .then((resultados) => SetPlaylists(resultados)) 
    }, [])


    const [artists, setArtists] = useState([])
    
    var [playlistnohidden, setplaylistnohidden] = useState(true)
    var [artistnohidden, setartistnohidden] = useState(false)


    useEffect(() => {
        const searchTerm = valordoinput.toLowerCase()
        if (searchTerm === ""){
            setplaylistnohidden(true)
            setartistnohidden(false)
        }else if (varantiga !== searchTerm){
            const url = `http://localhost:5000/artists?name_like=${searchTerm}` 
            fetch(url)
                .then((response) => response.json())
                .then((result) => setArtists(result))
            setplaylistnohidden(false)
            setartistnohidden(true)
            varantiga = searchTerm
        }   
    })



    return (
        <div className="musics-content">
            <section id="result-playlist">
                <section className="boasvindas">
                    <h1>Boa tarde</h1>
                    <h2>Navegar por todas as seções</h2>
                </section>
                <div className="scroll" style={{display: playlistnohidden ? 'block' : 'none'}}>
                    <div className="scroll-musicas">
                        {Playlists.map((playlist) => {
                            return <Playlist key={playlist.id} link={playlist.link} name={playlist.name} img={playlist.urlImg} color={playlist.color} />;
                        })}
                    </div>
                </div>

                </section>
                <div className="scroll hidden" style={{display: artistnohidden ? 'block' : 'none'}}>
                    <div className="scroll-musicas">    
                        {artists.map((artist) => {
                            return <Artista_card img={artist.urlImg}  name={artist.name} categorie={artist.heisa} link={artist.link} key={artist.id}/>
                        })}
                    </div>
                </div>
        </div>
    )
}

export default Main;