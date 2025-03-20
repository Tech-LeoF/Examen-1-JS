async function deboraPotter() {
    try {
        const url = await fetch("https://hp-api.onrender.com/api/characters");
        const json = await url.json();
        
        console.log(json);
        return json;
        

    } catch (error) {
        console.log(`Ha ocurrido un error ${error.message}`);
    };
};

async function showdata(){
    const data = await deboraPotter();


data.forEach(element => {
    
    let div = document.getElementById("div");
    let p = document.createElement("p");
    p.textContent = (element.house);
    
    div.appendChild(p);

})

}

showdata();

