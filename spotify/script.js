const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist')
const resultPlaylist = document.getElementById('result-playlist')

function requestApi(searchTerm){
    const url = `http://localhost:5000/artists?name_like=${searchTerm}` 
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden')
    const artistname = document.getElementById('artist-name')
    const artistImage = document.getElementById('artist-img')
    const heisa = document.getElementById('artist-categorie')

    result.forEach(element => {
        artistname.innerText = element.name;    
        artistImage.src = element.urlImg;  
        heisa.innerText = element.heisa;
    });

    resultArtist.classList.remove('hidden')
}

document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase()
    if (searchTerm === ""){
        resultPlaylist.classList.add('hidden')
        resultArtist.classList.remove('hidden')
    }else{
        requestApi(searchTerm)
    }
})

