import {randomPokemonId} from './randomPokemonId.js'

let controler = true;
let arrayId = [];



export function get(){

    let idPoke = randomPokemonId();
    let num = arrayId.find(element => element === idPoke);

    if(arrayId.length === 100){
        alert(`Você já conheceu 100 Pokemons diferentes!`);
        document.getElementById('get-pokemon').disabled= true;  
    }

    if(num === undefined){
        arrayId.push(idPoke);
        getPokemon(idPoke);
        controler = true;
    }
    else{
        while (controler === true) { 
            let otherId = randomPokemonId();
            //console.log(`Pokemon já retornado ID: ${idPoke}`);

            if(arrayId.find(element => element === otherId) === undefined){
                arrayId.push(otherId);
                //console.log(`Novo Pokemon ID: ${otherId}`);
                getPokemon(otherId);
                controler = false;
            }
            
        }
    }
}

const ul = document.getElementById('infomation-list');

function getPokemon(idPoke){
    fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            //console.log(data);
            document.getElementById('picture-pokemon').setAttribute('src', data['sprites']['front_default']);
            document.getElementById('name').innerHTML = data['name'];
            document.getElementById('order').innerHTML = data['order'];
        })
        .catch((e)=>{
            return e
        });
}