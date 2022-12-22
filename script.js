

const BASE_URL = 'https://akabab.github.io/superhero-api/api/id/';


const img = document.querySelector("#image");
const RandomHero = document.querySelector("#RandomHero");
const IDHero = document.querySelector('#IDHero');
const inputID = document.querySelector('#inputID');
const reset = document.querySelector('#reset');

const getSuperHero =(ID) => {
    fetch(BASE_URL+ID + '.json' )
    .then(response => response.json())
    .then(json => {
        img.src = json.images.md;
    })
}   

const randomID = () =>{
    const noOfHeroes = 731;
    return Math.floor(Math.random()*noOfHeroes)+1;
}

const temp = () =>{

    const id = Number(inputID.value);
    getSuperHero(id);
}

IDHero.onclick = () =>{
    inputID.classList.remove('visi');
    reset.classList.remove('visi');

    if(inputID.value != ''){
        temp();
    }
}

reset.onclick = () =>{
    inputID.classList.add('visi');
    reset.classList.add('visi');
    img.src='';

}

RandomHero.onclick = () =>{
    getSuperHero(randomID()); 
}
