
// array  de objetos com as infor dos personagens
let herois = [
    {
        nome: "Herrique",
        vida:0,
        hp:0,
        ataque:0,
        dano:0,
        img: "../images/heroi01.png"
    },
    {
        nome: "Wesley",
        vida:0,
        hp:0,
        ataque:0,
        dano:0,
        img: "../images/heroi02.png"
    },
    {
        nome: "Mary",
        vida:0,
        hp:0,
        ataque:0,
        dano:0,
        img: "../images/heroi03.png"
    },
]

//esqueletos primeiro desafio
let esqueletos = [
    {
        nome: "Esqueletrons",
        vida:300,
        hp:3,
        ataque:17,
        dano:170,
        img: "../images/caveiras.gif"
    }
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

let dadosHeroi = "";

 // pegando o elemento do html
 const container_herois = document.querySelector(".container_horois");

// criando os card dos herois 
const hendleCards = () => {

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
    container_herois.innerHTML = result

}

hendleCards()

const hendleHeroi = (e) => {
    container_herois.style.justifyContent = "flex-start";

    if(dadosHeroi !== ""){
        const data_heroi = herois[e]
        const newHeroi = {
            nome: data_heroi.nome,
            vida: data_heroi.vida,
            hp: data_heroi.hp,
            ataque: data_heroi.ataque,
            dano: data_heroi.dano,
            img: data_heroi.img,
        }
    
        herois = [newHeroi];
        console.log(herois)
        hendleCards()
        
    }

}

// pegando os card dos herois
const cards = document.querySelectorAll(".heroi")

// add e removendo classe da seleçao do heroi
cards.forEach((e, id)=>{
    e.addEventListener("click", ()=>{
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.remove("hehoi_select")
        }
        e.classList.add("hehoi_select")
        dadosHeroi = id
    })
})

const jogar_btn = document.querySelector(".jogar_btn")
const title_herois = document.querySelector(".title_herois")
const card_start_jogo = document.querySelector(".card_start_jogo")
const body = document.querySelector("body")

let btn_explorar = "";
let  btn_entrarNaCaveerna = ""


jogar_btn.addEventListener("click", ()=> {
    if(dadosHeroi !== ""){
        card_start_jogo.innerHTML = `
            <h2> Olá, ${herois[0].nome}</h2>
            <div class="paragrafo">
                <p class="legenda">
                    já se passaram alguns dias desde que você se juntou à Guilda dos Aventureiros, e você estava se preparando para sua primeira incursão em uma masmorra! Após alguns dias de viagem, você  chega à entrada da misteriosa masmorra. Você está cheio de expectativas enquanto se aproxima. A entrada da masmorra está diante de você, escura e ameaçadora. As paredes de pedra são escorregadias de umidade, e o ar cheira a mofo e decomposição.
                </p>
            </div>
            <h3>O que você quer fazer ?</h3>
            <div>
                <button class="entrarNaCaveerna">Entrar na Caveerna</button>
                  OU
                <button class="explorar">Explorar</button>
            </div>
        ` 
        hendleHeroi(dadosHeroi)
        jogar_btn.style.display = "none"
        title_herois.style.display = "none"
        body.style.background = `#000 url("../images/masmorrar.webp") no-repeat center / cover`
    }

    let entrarNaCaveerna = document.querySelector(".entrarNaCaveerna")
    let explorar = document.querySelector(".explorar")

    entrarNaCaveerna.addEventListener("click", ()=> {

        if(entrarNaCaveerna.textContent === "Entrar na Caveerna"){
            body.style.background = `#000 url("../images/caveernafogo.gif") no-repeat center / cover`
            document.querySelector(".legenda").textContent = `
                Ao entrar na masmorra, você percebe que as paredes estão cobertas por símbolos estranhos, emitindo uma luz fraca na penumbra. O ar dentro está impregnado com o cheiro forte de morte e decomposição, fazendo sua pele arrepiar. Você consegue ouvir os sons distantes de algo se movendo nas profundezas da masmorra, mas não consegue identificar exatamente o que é.
            `
            entrarNaCaveerna.textContent = "Seguir Caminhando"
            explorar.textContent = "Analisar o interior da caverna"
        }else 
        if(entrarNaCaveerna.textContent === "Seguir Caminhando"){
            let numeroDaSorte =  Math.round(Math.random());
            if(numeroDaSorte > 0){

                document.querySelector(".paragrafo").innerHTML = `
                    <h3> Você inalou um gás toxico e perdeu pontos de vida (-200)</h3></br>
                    <p class="legenda">
                        Ao olhar adiante, sua equipe depara-se com um grupo de esqueletos dispostos em uma formação ameaçadora. Suas figuras ósseas parecem animadas e prontas para o combate enquanto ficam próximas a um cristal que emite uma luz fraca. As órbitas vazias dos olhos focam em você com uma intensidade sinistra conforme você se aproxima cautelosamente, sentindo a presença ameaçadora dos mortos-vivos.
                    </p>
                `
                entrarNaCaveerna.textContent = "Lutar"
                explorar.textContent = "correr"

                herois[0].vida = herois[0].vida - 200; 
                hendleCards()
            }
        }else 
        if(entrarNaCaveerna.textContent === "Lutar"){
            card_start_jogo.style.display = "none"

            let hp = Math.floor(Math.random() * 15) + 3 // gerando numero aleatorio entre 3 e 17
            let ataque = (20 - hp);

            esqueletos[0].hp = hp;
            esqueletos[0].ataque = ataque;
            esqueletos[0].vida = hp * 100;
            esqueletos[0].dano = ataque * 10;

            const html = `
                <div class="heroi">
                    <img src=${esqueletos[0].img} alt="">
                    <div class="area_xp">
                        <h3>NOME</h3><span>${esqueletos[0].nome}</span>
                    </div>
                    <div class="area_xp">
                        <h3>VIDA</h3><span>${esqueletos[0].vida}</span>
                    </div>
                    <div class="area_xp">
                        <h3>HP</h3><span>${esqueletos[0].hp}</span>
                    </div>
                    <div class="area_xp">
                        <h3>ATAQUE</h3><span>${esqueletos[0].ataque}</span>
                    </div>
                    <div class="area_xp">
                        <h3>DANO</h3><span>${esqueletos[0].dano}</span>
                    </div>
                </div>
            `
            container_herois.innerHTML+= html
            container_herois.style.justifyContent = "space-between"

            document.querySelector(".btns_ataques").style.display = "flex"

        }

    })

    explorar.addEventListener("click", ()=> {
        body.style.background = `#000 url("../images/caveernafogo.gif") no-repeat center / cover`
    })
    
})

// btns de ataque heroi e vilao 
const btn_heroi = document.querySelector(".btn_heroi")
const btn_vilao = document.querySelector(".btn_vilao")

btn_heroi.addEventListener("click", ()=>{
    let nivelDeAtaque = Math.floor(Math.random() * 4)

    switch(nivelDeAtaque){
        case 1: esqueletos[0].vida = esqueletos[0].vida - (herois[0].dano * 1);
            document.querySelector(".foca_de_ataque").textContent = `Ataque de nivel 01 Força ${herois[0].dano * 1} `
            document.querySelector(".status_ataque").innerHTML = "E a vez do vilão Atacar !"
            break
        case 2: esqueletos[0].vida = esqueletos[0].vida - ( herois[0].dano * 1.5);
            document.querySelector(".foca_de_ataque").textContent = `Ataque de nivel 02 Força ${herois[0].dano * 1.5} `
            document.querySelector(".status_ataque").innerHTML = "E a vez do vilão Atacar !"
            break 
        case 3:esqueletos[0].vida = esqueletos[0].vida - ( herois[0].dano * 2);
            document.querySelector(".foca_de_ataque").textContent = `Ataque de nivel 03 Força ${herois[0].dano * 2} `
            document.querySelector(".status_ataque").innerHTML = "E a vez do vilão Atacar!"
        break
        default: document.querySelector(".status_ataque").innerHTML = "O vilão defendeu seu Ataque !!"
    }

    if(esqueletos[0].vida > 0){

        const html = `
            <div class="heroi">
                <img src=${esqueletos[0].img} alt="">
                <div class="area_xp">
                    <h3>NOME</h3><span>${esqueletos[0].nome}</span>
                </div>
                <div class="area_xp">
                    <h3>VIDA</h3><span>${esqueletos[0].vida}</span>
                </div>
                <div class="area_xp">
                    <h3>HP</h3><span>${esqueletos[0].hp}</span>
                </div>
                <div class="area_xp">
                    <h3>ATAQUE</h3><span>${esqueletos[0].ataque}</span>
                </div>
                <div class="area_xp">
                    <h3>DANO</h3><span>${esqueletos[0].dano}</span>
                </div>
            </div>
        `
        container_herois.innerHTML = ""
        hendleCards()
        container_herois.innerHTML+= html
    }else{
        hendleCards()
        document.querySelector(".foca_de_ataque").textContent = `Parabéns ${herois[0].nome}!...  Você Venceu Essa Batalha contra o ${esqueletos[0].nome} `
        document.querySelector(".btns_ataques").style.display = "none"
        card_start_jogo.style.display = "flex"
       
        card_start_jogo.innerHTML = `
            <h2> Olá, ${herois[0].nome}</h2>
            <div class="paragrafo">
                <p class="legenda">
                    Finalmente o Exército foi conquistado! Uma sesação de paz invade cada centímetro da câmara... Num piscar de olhos você está em uma planície muito peculiar e ao mesmo tempo familiar também... você percebe que está diante de três portas...
                </p>
            </div>
            <h3>O que você quer fazer ?</h3>
            <div>
                <button class="entrarNaCaveerna">Entrar na Caveerna</button>
                  OU
                <button class="explorar">Explorar</button>
            </div>
        ` 
        
    }
    
    document.querySelector(".vida_vilao").textContent = `${esqueletos[0].vida}`
    document.querySelector(".vida_heori").textContent = `${herois[0].vida}`
    document.querySelector(".entrarNaCaveerna").textContent = "Porta (A)"
    document.querySelector(".explorar").textContent = "Porta (B)"
        
})


// logica vilao ataca
btn_vilao.addEventListener("click", ()=>{
    let ataque = Math.floor(Math.random() * 4)

    if(ataque > 0){
        herois[0].vida = herois[0].vida - esqueletos[0].dano
        document.querySelector(".status_ataque").innerHTML = "E a vez do heroi Atacar!"
        const html = `
            <div class="heroi">
                <img src=${esqueletos[0].img} alt="">
                <div class="area_xp">
                    <h3>NOME</h3><span>${esqueletos[0].nome}</span>
                </div>
                <div class="area_xp">
                    <h3>VIDA</h3><span>${esqueletos[0].vida}</span>
                </div>
                <div class="area_xp">
                    <h3>HP</h3><span>${esqueletos[0].hp}</span>
                </div>
                <div class="area_xp">
                    <h3>ATAQUE</h3><span>${esqueletos[0].ataque}</span>
                </div>
                <div class="area_xp">
                    <h3>DANO</h3><span>${esqueletos[0].dano}</span>
                </div>
            </div>
        `
        container_herois.innerHTML = ""
        hendleCards()
        container_herois.innerHTML+= html

    }else{
        document.querySelector(".status_ataque").innerHTML = "O Heroi defendeu o Ataque !"
    }
    document.querySelector(".vida_vilao").textContent = ` ${esqueletos[0].vida}`
    document.querySelector(".vida_heori").textContent = `${herois[0].vida}`
})




// logica do jogo 




