import { get } from "./getPokemon.js";

window.onload = ()=>{
    document.getElementById('picture-pokemon').setAttribute('src', './image/ho.ico')
}

try{
    document.getElementById('get-pokemon').onclick = get; 
}
catch(e){
    console.log(e);
}
Math.random