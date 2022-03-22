function fetchPokemon() {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("pikachucry.gif");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);

        let pokenombre = data.species.name;
            document.getElementById("poKenombre").innerHTML = pokenombre.toUpperCase();


        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
        console.log(pokeImg);

        let pokeImg2 = data.sprites.front_shiny;
        pokeImage2(pokeImg2);
        console.log(pokeImg2);

        let pokeImg3 = data.sprites.back_default;
        pokeImage3(pokeImg3);
        console.log(pokeImg3);

        let id = data.id;
				document.getElementById("pokemonId").innerHTML = "#" + " " + id;

        let movimientos = data.moves.map((typ) => typ.move.name);
				document.getElementById("poKemovimientos").innerHTML = "";
        document.getElementById("poKemovimientos").innerHTML = "";
        movimientos.forEach(function (el) {
            document.getElementById("poKemovimientos").innerHTML += "<li>" + el + "</li>";
        
            let hp = data.stats[0].base_stat;
            let attack = data.stats[1].base_stat;
            let defense = data.stats[2].base_stat;
            let specialattack = data.stats[3].base_stat;
            let specialdefense = data.stats[4].base_stat;
            let speed = data.stats[5].base_stat;


            document.getElementById("pokeestadisticas").innerHTML = "";
            const lista = document.getElementById("pokeestadisticas");


            const li_hp = document.createElement("li");
            const li_attack = document.createElement("li");
            const li_defense = document.createElement("li");
            const li_specialattack = document.createElement("li");
            const li_specialdefense = document.createElement("li");
            const li_speed = document.createElement("li");


            li_hp.innerHTML = "<b>HP:</b>" + " " + hp;
            li_attack.innerHTML = "<b>Defense:</b>" + " " + attack;
            li_defense.innerHTML = "<b>Defense:</b>" + " " + defense;
            li_specialattack.innerHTML = "<b>Special Attack:</b>" + " " + specialattack;
            li_specialdefense.innerHTML = "<b>Special Defense:</b>" + " " + specialdefense;
            li_speed.innerHTML = "<b>Speed:</b>" + " " + speed;


            lista.appendChild(li_hp);
            lista.appendChild(li_attack);
            lista.appendChild(li_defense);
            lista.appendChild(li_specialattack);
            lista.appendChild(li_specialdefense);
            lista.appendChild(li_speed);
        });
        
        let type = data.types.map((typ) => typ.type.name);

            document.getElementById("pokemonTipo").innerHTML = "";
            type.forEach((item) =>{
                
            // Buscar los tipos para agregar en un <li> con su clase
            if (item.includes("normal")) {
                document.getElementById("pokemonTipo").innerHTML += `<li id="tiponormal">${item}</li>`;
            } else if (item.includes("fire")) {
                document.getElementById("pokemonTipo").innerHTML += `<li id="tipofuego">${item}</li>`;
            } else if (item.includes("water")) {
                document.getElementById("pokemonTipo").innerHTML += `<li id="tipoagua">${item}</li>`;
            } else if (item.includes("grass")) {
                document.getElementById("pokemonTipo").innerHTML += `<li id="tipoplanta">${item}</li>`;
            } else if (item.includes("flying")) {
                document.getElementById("pokemonTipo").innerHTML += `<li id="tipovolador">${item}</li>`;
            } else if (item.includes("fighting")) {
                document.getElementById("pokemonTipo").innerHTML += `<li id="tipolucha">${item}</li>`;
            } else if (item.includes("poison")) {
                document.getElementById("pokemonTipo").innerHTML += `<li id="tipoveneno">${item}</li>`;
            } else if (item.includes("electric")) {
                document.getElementById("pokemonTipo").innerHTML += `<li id="tipoelectrico">${item}</li>`;
            } else if (item.includes("ground")) {
                document.getElementById("pokemonTipo").innerHTML += `<li id="tipotierra">${item}</li>`;
            } else if (item.includes("rock")) {
                document.getElementById("pokemonTipo").innerHTML += `<li id="tiporoca">${item}</li>`;
            } else if (item.includes("psychic")) {
                document.getElementById("pokemonTipo").innerHTML += `<li id="tipopsiquico">${item}</li>`;
            } else if (item.includes("ice")) {
                document.getElementById("pokemonTipo").innerHTML += `<li id="tipohielo">${item}</li>`;
            } else if (item.includes("bug")) {
                document.getElementById("pokemonTipo").innerHTML += `<li id="tipobicho">${item}</li>`;
            } else if (item.includes("ghost")) {
                document.getElementById("pokemonTipo").innerHTML += `<li id="tipofantasma">${item}</li>`;
            } else if (item.includes("steel")) {
                document.getElementById("pokemonTipo").innerHTML += `<li id="tipoacero">${item}</li>`;
            } else if (item.includes("dragon")) {
                document.getElementById("pokemonTipo").innerHTML += `<li id="tipodragon">${item}</li>`;
            } else if (item.includes("dark")) {
                document.getElementById("pokemonTipo").innerHTML += `<li id="tipooscuro">${item}</li>`;            
            } else {
                document.getElementById("pokemonTipo").innerHTML += `<li>${item}</li>`;
                }
            });   
        });
    };

const pokenombre = url =>{
    const poKenombre = document.getElementById("poKenombre");
    poKenombre.src = url;
}

const pokeImage = (url) => {
	const pokeImg = document.getElementById("imagenPokemon");
	pokeImg.src = url;
}

const pokeImage2 = (url) => {
    const pokePhoto2 = document.getElementById("pokeImg2");
    pokePhoto2.src = url;
}

const pokeImage3 = url =>{
    pokePhoto3 = document.getElementById("pokeImg3");
    pokePhoto3.src = url;
}

const id = url =>{
    pokeid = document.getElementById(pokeId);
    pokeid.src = url;
} 

const movimientos = (url) => {
	const pantallaverdemov = document.getElementById("poKemovimientos");
	pantallaverdemov.src = url;
}


const pokeType = (url) => {
	const pokeparte = document.getElementsById("pokemonTipo");
	pokeparte.src = url;
}
