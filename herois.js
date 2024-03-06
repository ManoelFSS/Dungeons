
// array  de objetos com as infor dos personagens
const herois = [
    {
        nome: "Herrique",
        vida:0,
        hp:0,
        ataque:0,
        dano:0,
        img: "./images/heroi01.png"
    },
    {
        nome: "Wesley",
        vida:0,
        hp:0,
        ataque:0,
        dano:0,
        img: "./images/heroi02.png"
    },
    {
        nome: "Mary",
        vida:0,
        hp:0,
        ataque:0,
        dano:0,
        img: "./images/heroi03.png"
    },
]

// interendo com o array de herois 
herois.forEach((e)=>{
    let hp = Math.floor(Math.random() * 15) + 3 // gerando numero aleatorio entre 3 e 17
    let ataque = (20 - hp) ;
    e.hp = hp;
    e.ataque = ataque;
    e.vida = hp * 100;
    e.dano = ataque * 10;
});

// pegando o elemento do html
const container_herois = document.querySelector(".container_horois");

// criando os card dos herois 
const result = herois.map((e)=>{
    const html = `
        <div class="heroi">
            <img src=${e.img} alt="">
            <div class="area_xp">
                <h3>NOME</h3><span>${e.nome}</span>
            </div>
            <div class="area_xp">
                <h3>VIDA</h3><span>${e.vida}</span>
            </div>
            <div class="area_xp">
                <h3>HP</h3><span>${e.hp}</span>
            </div>
            <div class="area_xp">
                <h3>ATAQUE</h3><span>${e.ataque}</span>
            </div>
            <div class="area_xp">
                <h3>DANO</h3><span>${e.dano}</span>
            </div>
        </div>
    `
    return html;
});

// adicionando os cards dentro  do container  no html
container_herois.innerHTML = result;




// pegando os card dos herois
const cards = document.querySelectorAll(".heroi")

// add e removendo classe da seleçao do heroi
cards.forEach((e)=>{

    e.addEventListener("click", ()=>{
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.remove("hehoi_select")
        }
        e.classList.add("hehoi_select")
    })
    console.log(e)
})


