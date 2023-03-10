

const BASE_URL = 'https://akabab.github.io/superhero-api/api/id/';


const img = document.querySelector("#image");
const RandomHero = document.querySelector("#RandomHero");
const IDHero = document.querySelector('#IDHero');
const inputID = document.querySelector('#inputID');
const reset = document.querySelector('#reset');
const heroName = document.querySelector("#name");
const heroPower = document.querySelector("#powerLevel");

const getSuperHero =(ID) => {
    fetch(BASE_URL+ID + '.json' )
    .then(response => response.json())
    .then(json => {
        heroName.innerText= json.name;
        img.src = json.images.md;
        heroPower.innerText= `Intelligence: ${json.powerstats.intelligence}, 
                                Strength: ${json.powerstats.strength}, 
                                Speed: ${json.powerstats.speed}, 
                                Durability: ${json.powerstats.durability}, 
                                Power: ${json.powerstats.power}, 
                                Combat: ${json.powerstats.combat}`
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
    IDHero.innerText = "Search";

    if(inputID.value != ''){
        temp();
    }
}

reset.onclick = () =>{
    inputID.classList.add('visi');
    reset.classList.add('visi');
    img.src='';
    heroName.innerText=''
    heroPower.innerText=''
    IDHero.innerText='Get Hero By ID'

}

RandomHero.onclick = () =>{
    getSuperHero(randomID()); 
}
