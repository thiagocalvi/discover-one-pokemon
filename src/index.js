function randomNum(){
    let num = Math.ceil(Math.random() * 100);
    return num
}


function getPokemon(){

    // let X = [];
    let numRandon = randomNum();

    // if(numRandon > 0 && numRandon< 100){
        
    // }


    fetch(`https://pokeapi.co/api/v2/pokemon/${numRandon}`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        document.getElementById('picture-pokemon').setAttribute('src', data['sprites']['front_default']);
        document.getElementById('name').innerHTML = data['name'];
        document.getElementById('order').innerHTML = data['order'];

    })
    .catch((e)=>{

    });
}


try{
    document.getElementById('get-pokemon').onclick = getPokemon; 
}
catch(e){
    console.log(e);
}
