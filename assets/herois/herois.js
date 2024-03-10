
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
    {
        nome: "Murilo",
        vida:0,
        hp:0,
        ataque:0,
        dano:0,
        img: "../images/ninja03.png"
    },
    {
        nome: "Matheus",
        vida:0,
        hp:0,
        ataque:0,
        dano:0,
        img: "../images/marteleiro.png"
    },
]


// array com  objeto  do vilao  esqueletos primeiro desafio
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

// interendo com o array de herois  e gerando de forma dinamica  o dano e vida
herois.forEach((e)=>{
    let hp = Math.floor(Math.random() * 15) + 3 // gerando numero aleatorio entre 3 e 17
    let ataque = (20 - hp) ; // pegando o valor gerado e subtraindo por 20 pontos sugeridos 
    e.hp = hp;
    e.ataque = ataque;
    e.vida = hp * 100;
    e.dano = ataque * 10;
});

let IdHeroi = null; // variavel global para  com valor null aonde receberar posteriomente o id do eroi escolhido

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

hendleCards() // camada da funçao 

// funçao para enviar o heroi selecionado para o array herois e remove os  demais assim facilitando o map mostrar renderiza na tela
const hendleHeroi = (e) => {
    container_herois.style.justifyContent = "flex-start";
    // if verifica o id do heroi para pode enviar para o array do herois
    if(IdHeroi !== null){
        const data_heroi = herois[e] // pegando o herois pelo id 
        // criando novo  heroi 
        const newHeroi = {
            nome: data_heroi.nome,
            vida: data_heroi.vida,
            hp: data_heroi.hp,
            ataque: data_heroi.ataque,
            dano: data_heroi.dano,
            img: data_heroi.img,
        }
    
        herois = [newHeroi]; // substituindo todo o array de objetod e todos os herois e add somente o heroi selecionado
        hendleCards()// atualiza a renderizaçao do heroi
        
    }

}

// pegando os card dos herois
const cards = document.querySelectorAll(".heroi")// metodo seleciona mais de um elemento do html

// add e removendo classe da seleçao do heroi
cards.forEach((e, id)=>{ // usando o forEach para pega cada um dos cards o proprio item e id 
    // add um evento de click em cada item
    e.addEventListener("click", ()=>{
        // for para remover a class de todos os cards
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.remove("hehoi_select")
        }
        // add a class novamente somente a um card
        e.classList.add("hehoi_select")
        IdHeroi = id // passando o valor do id 
    })
})

// pegando os elementos no html
const jogar_btn = document.querySelector(".jogar_btn")
const title_herois = document.querySelector(".title_herois")
const card_start_jogo = document.querySelector(".card_start_jogo")
const body = document.querySelector("body")

let btn_explorar = "";
let  btn_entrarNaCaveerna = ""


jogar_btn.addEventListener("click", ()=> {
    IdHeroi !== null ? "" : alert("Por favor selecione um Heroi para Jogar !")
    if(IdHeroi !== null){
        // criando html com templay string
        card_start_jogo.innerHTML = `
            <div class="paragrafo">
                <p class="legenda">
                    já se passaram alguns dias desde que você se juntou à Guilda dos Aventureiros, e você estava se preparando para sua primeira incursão em uma masmorra! Após alguns dias de viagem, você  chega à entrada da misteriosa masmorra. Você está cheio de expectativas enquanto se aproxima. A entrada da masmorra está diante de você, escura e ameaçadora. As paredes de pedra são escorregadias de umidade, e o ar cheira a mofo e decomposição.
                </p>
            </div>
            <h3>O que você quer fazer ?</h3>
            <div>
                <button class="entrarNaCaveerna">Entrar na Caveerna</button>
                
                <button class="explorar">Explorar</button>
            </div>

            ` 
        hendleHeroi(IdHeroi)// passando o valor do id para funçao que pega o heroi selecionado e criar o novo heroi e envia para o array herois
        
        // processo de manipulaçao dos elementos na tela
        jogar_btn.style.display = "none"
        title_herois.style.display = "none"
        body.style.background = `#000 url("../images/masmorrar.webp") no-repeat center / cover`
    }

    // pegando os elementos html
    let entrarNaCaveerna = document.querySelector(".entrarNaCaveerna")
    let explorar = document.querySelector(".explorar")

    // açao do botao  de click
    entrarNaCaveerna.addEventListener("click", ()=> {
        explorar.style.display = "block"
        // verifica se o texto do btn  para validar a entrada no if 
        if(entrarNaCaveerna.textContent === "Entrar na Caveerna"){
            body.style.background = `#000 url("../images/caveernafogo.gif") no-repeat center / cover`
            
            const p = document.querySelector(".paragrafo h3")
            p ? p.style.display = "none" : null

            document.querySelector(".legenda").textContent = `
                Ao entrar na masmorra, você percebe que as paredes estão cobertas por símbolos estranhos, emitindo uma luz fraca na penumbra. O ar dentro está impregnado com o cheiro forte de morte e decomposição, fazendo sua pele arrepiar. Você consegue ouvir os sons distantes de algo se movendo nas profundezas da masmorra, mas não consegue identificar exatamente o que é.
            `
            // trocando o texto dos btns
            entrarNaCaveerna.textContent = "Seguir Caminhando"
            explorar.textContent = "Analisar o interior da caverna"
        }else 
        if(entrarNaCaveerna.textContent === "Seguir Caminhando"){
            let numeroDaSorte =  Math.round(Math.random()) ; // gera um numero entre 0 e 1
            // verifica se e maior que 0 assim renderiza a os textos e faz o heroi perder pontos
            console.log(numeroDaSorte)
            if(numeroDaSorte > 0){
                document.querySelector(".paragrafo").innerHTML = `
                    <h3>${herois[0].nome} Você inalou um gás toxico e perdeu pontos de vida (-200)</h3></br>
                    <p class="legenda">
                        Ao olhar adiante, sua equipe depara-se com um grupo de esqueletos dispostos em uma formação ameaçadora. Suas figuras ósseas parecem animadas e prontas para o combate enquanto ficam próximas a um cristal que emite uma luz fraca. As órbitas vazias dos olhos focam em você com uma intensidade sinistra conforme você se aproxima cautelosamente, sentindo a presença ameaçadora dos mortos-vivos.
                    </p>
                `
                 // trocando o texto dos btns
                entrarNaCaveerna.textContent = "Lutar"
                explorar.textContent = "correr"
                // diminui pontos de vida do heroi em -200
                herois[0].vida = herois[0].vida - 200; 
                hendleCards()// atualiza as infors
            }else{
                document.querySelector(".paragrafo").innerHTML = `
                    <h3>${herois[0].nome} esta tudo muito silencio tome cuidado!</h3></br>
                    <p class="legenda">
                        Ao seguir caminhando pela caverna, o tempo passa e a sua a equipe de aventureiros começa a ganhar confiança, a atenção vai se dispersando e quando notam, todos estão fazendo piadas em tom de voz descontraído. Tudo parece estar indo bem até que todos começam a ouvir um ruído arrepiante surgindo em meio a suas vozes, o clima alegre se dissipa repentinamente, todos ficam alertas e em silêncio, tentando observar o que os espera pela frente.
                    </p>
                `
                 // trocando o texto dos btns
                entrarNaCaveerna.textContent = "Lutar"
                explorar.textContent = "correr"
                hendleCards()// atualiza as infors
            }

        }else 
        if(entrarNaCaveerna.textContent === "Lutar"){ // excolher a luta 
            card_start_jogo.style.display = "none"// remove da tela o menu de dialogo title paragrafos etc...

            let hp = Math.floor(Math.random() * 15) + 3 // gerando numero aleatorio entre 3 e 17
            let ataque = (20 - hp);// calc do ataque do vilao
            // add os valores de atributos do vilao
            esqueletos[0].hp = hp;
            esqueletos[0].ataque = ataque;
            esqueletos[0].vida = hp * 100;
            esqueletos[0].dano = ataque * 10;
           
            // criando html
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
            body.style.background = `#000 url("../images/caveernafogo.gif") no-repeat center / cover`
            document.querySelector(".btns_ataques").style.display = "flex" // mostrando a area dos btns do heroi e vilao
        }
    })

    // btn açoes
    explorar.addEventListener("click", ()=> {
           
        if(explorar.textContent === "Explorar"){
            let numeroDaSorte =  Math.round(Math.random()) ; // gera um numero entre 0 e 1
            // verifica se e maior que 0 assim renderiza a os textos e faz o heroi perder pontos
            console.log(numeroDaSorte)
            if(numeroDaSorte > 0){
                
                document.querySelector(".paragrafo").innerHTML = `
                    <h3>${herois[0].nome}  explore a área... </h3></br>
                    <p class="legenda">
                        Após uma busca sem resultados na área, você se dirige à masmorra, aceitando a tranquilidade antes do desafio iminente. Embora sem descobertas notáveis, a expectativa cresce enquanto você se prepara para adentrar a dungeon.
                    </p>
                `
                 // trocando o texto dos btns
                entrarNaCaveerna.textContent = "Entrar na Caveerna"
                explorar.style.display = "none"
               
                hendleCards()// atualiza as infors
              
            }else{
                document.querySelector(".paragrafo").innerHTML = `
                <h3>${herois[0].nome} você achou uma poção magica (+200) pontos de vida!</h3></br>
                <p class="legenda">
                    esperando encontrar pistas ou recursos valiosos que possam ajudá-lo em sua missão. Enquanto explora, nota algumas marcas entalhadas nas árvores próximas que lhe deixam curioso, você continua a busca e finalmente descobre algo: um frasco misterioso escondido entre as folhas caídas, ele contém uma substância brilhante de cor azul intensa. Intrigado, você examina mais de perto o frasco e percebe que se trata de uma poção mágica. A etiqueta, escrita em uma língua antiga, sugere que a poção tem propriedades de cura."
                </p>
                `
                // trocando o texto dos btns
                entrarNaCaveerna.textContent = "Entrar na Caveerna"
                explorar.style.display = "none"
                herois[0].vida += 200;
                hendleCards()// atualiza as infors
            }

        }else if(explorar.textContent === "correr"){

            explorar.style.display = "none"
            document.querySelector(".paragrafo").innerHTML = `
            <h3>${herois[0].nome} Fugir não e uma escolha !!</h3></br>
            <p class="legenda">
                Voçê achou mesmo que iria fugir ?, a unica maneira de sair daqui é me infrentando ha ha ha ha 
            </p>
            `
            // trocando o texto dos btns
            entrarNaCaveerna.textContent = "Lutar"
            hendleCards()// atualiza as infors

        }else if(explorar.textContent === "Analisar o interior da caverna"){
            let numeroDaSorte =  Math.round(Math.random()) ; // gera um numero entre 0 e 1
            // verifica se e maior que 0 assim renderiza a os textos e faz o heroi perder pontos
       
            if(numeroDaSorte > 0){
                document.querySelector(".paragrafo").innerHTML = `
                <h3>${herois[0].nome} siga em frente! </h3></br>
                <p class="legenda">
                    Ao analisar o interior da caverna, você nota que o piso está repleto de ossos de animais, deixando o cheiro pútrido ainda mais evidente, você começa a observar as paredes da caverna e encontra um objeto pendurado...
                    Ao sair fora, você tropeça em um monte de ossos. O estrondo ecoa pelo ambiente e o barulho rompe o silêncio, alertando aqueles que vivem nas profundezas da caverna...
                </p>
                `
                // trocando o texto dos btns
                entrarNaCaveerna.textContent = "Lutar"
                explorar.style.display = "none"
                hendleCards()// atualiza as infors
            }else{
                document.querySelector(".paragrafo").innerHTML = `
                <h3>${herois[0].nome} voçê acho uma lanterna magica! ganhou (+50)  pontos de Dano </h3></br>
                <p class="legenda">
                    Ao analisar o interior da caverna, você nota que o piso está repleto de ossos de animais, deixando o cheiro pútrido ainda mais evidente, você começa a observar as paredes da caverna e encontra um objeto pendurado...
                    O objeto parece ser uma lanterna antiga, coberta de poeira e teias de aranha. Ao se aproximar para examiná-la, você percebe que ainda há vestígios de óleo dentro dela, e ao tocar nela você a derruba abruptamente com um estrondo alto, ecoando pelo ambiente. O barulho rompe o silêncio, deixando a equipe tensa e alerta, tentando prestar atenção ao que os espera adiante 
                </p>
                `
                // trocando o texto dos btns
                entrarNaCaveerna.textContent = "Lutar"
                explorar.style.display = "none"
                herois[0].dano += 50;
                hendleCards()// atualiza as infors
            }
        }
          
            
     })
        
})



// btns de ataque heroi e vilao 
const btn_heroi = document.querySelector(".btn_heroi")
const btn_vilao = document.querySelector(".btn_vilao")

let btn = true;

// btn  heroi
btn_heroi.addEventListener("click", ()=>{

        if(btn){
        btn = false;

        btn_vilao.style.opacity = "1"
        btn_heroi.style.opacity = "0.5"

        let nivelDeAtaque = Math.floor(Math.random() * 4) // gerando qual vai ser a força do ataque do heroi 

        // caso  baseado no gerador de nivel de ataque 
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

        // condiçao que renderiza o vilao em quanto os pontos de vida for maior que 0
        if(esqueletos[0].vida > 0 ){

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
            container_herois.innerHTML = "" // limpa a tela removendo o heroi e vilao 
            hendleCards()// atualiza e renderiza  o heroi e o vilao na tela com as mudanças ocorridas
            container_herois.innerHTML+= html // add o heroi e o vilao ja com os dados atualizado na tela 

        }else{
            
            if(esqueletos[0].nome === "Esqueletrons"){
                    // else caso o vilao nao tenha mais pontos de vida maior que 0
                hendleCards()

                document.querySelector(".btns_ataques").style.display = "none"
                document.querySelector(".foca_de_ataque").style.display = "none"

                card_start_jogo.style.display = "flex"
            
                card_start_jogo.innerHTML = `
                    <h2> Olá, ${herois[0].nome}</h2>
                    <div class="paragrafo">
                        <p class="legenda">
                            Finalmente o Exército foi conquistado! Uma sesação de paz invade cada centímetro da câmara... Num piscar de olhos você está em uma planície muito peculiar e ao mesmo tempo familiar também... você percebe que está diante de duas portas...
                        </p>
                    </div>
                    <h3>O que você quer fazer ?</h3>
                    <div>
                        <button class="entrarNaCaveerna">Entrar na Caveerna</button>
                        <button class="explorar">Explorar</button>
                    </div>
                    <div class="area_bonus">
                        <p>Excolhar entre Receber Pontos de Vida ou De Dano</p>
                        <section>
                            <button class="pontosDeVida">+200 Pontos de Vida</button>
                            <button class="dano">+50 pontos Dano</button>
                        </section>
                    </div>
                    
                ` 
                    
                document.querySelector(".entrarNaCaveerna").textContent = "Porta (A)"
                const explorar = document.querySelector(".explorar")
                explorar.textContent = "Porta (B)"
                body.style.background = `#000 url("../images/portoes.jpg") no-repeat center / cover`
                
                const area_bonus = document.querySelector(".area_bonus")
                const dano = document.querySelector(".area_bonus .dano")
                const pontosDeVida = document.querySelector(".area_bonus .pontosDeVida")
                
                dano.addEventListener("click", ()=>{
                        herois[0].dano = herois[0].dano + 50;
                        area_bonus.style.display = "none"
                        hendleCards()
                })

                pontosDeVida.addEventListener("click", ()=>{
                    herois[0].vida = herois[0].vida + 200;
                    area_bonus.style.display = "none"
                    hendleCards()
                })

                explorar.addEventListener("click", () =>{
                    document.querySelector(".legenda").textContent = `
                        Você escolhe a Porta de Ferro, após atravessa-la tudo a sua volta desaparece, o infinito é seu novo horizonte... alguns minutos se passam até que você consegue escutar alguém chamando por seu nome... "Finalmente você conseguiu chegar até minha morada... Seus passos até aqui não foram fáceis, não espere nenhum tipo de alívio agora..."
                    `
                    body.style.background = `#000 url("../images/morada.avif") no-repeat center / cover`
                    explorar.style.display = "none"
                    entrarNaCaveerna.textContent = "Batalhar"
                    
                })
                
                
            }else if(esqueletos[0].nome === "Rei Caveira"){
                hendleCards()
                // add uma msg de vencedor
        
                document.querySelector(".btns_ataques").style.display = "none"
                document.querySelector(".foca_de_ataque").style.display = "none"
            
                card_start_jogo.style.display = "flex"
            
                card_start_jogo.innerHTML = `
                    <h2> Olá, ${herois[0].nome}</h2>
                    <div class="paragrafo">
                        <p class="legenda">
                            O ${esqueletos[0].nome} não mais nos assombrará! É hora de voltar a vila e comemorar com o povo...
                        </p>
                    </div>
                    <div class="reload">
                        <h3>Fim De Jogo</h3>
                        <a  href="../herois/herois.html"><button class="entrarNaCaveerna">Jogar Novamente</button></button></a>
                    </div>
                ` 
                body.style.background = `#000 url("../images/reino.avif") no-repeat center / cover`
                
            }
        
        }

        // add infor de status de vidas do heroi e vilao
        document.querySelector(".vida_vilao").textContent = `${esqueletos[0].vida}`
        document.querySelector(".vida_heori").textContent = `${herois[0].vida}`
        
        const entrarNaCaveerna = document.querySelector(".entrarNaCaveerna")

        // btns açoes dos portoes (a) e (b)
        entrarNaCaveerna.addEventListener("click", ()=>{
            document.querySelector(".legenda").textContent = `
            Você escolhe a Porta de Ouro. Atrás dela você encontra muito ouro, cristais, etc... você começa a imaginar toda a glória e poder que poderá onter com este tesouro praticamente infinito. Assim que você toca a primeira moeda a seu alncace uma voz grave e ecoante chama seu nome... "Então você prefere assim? Acha que seria fácil?"... o <nome do inimigo> suege com uma aura de poder nunca antes vista...
            `
            body.style.background = `#000 url("../images/ouro02.avif") no-repeat center / cover`
        
            if(entrarNaCaveerna.textContent === "Batalhar" ){
                
                    let hp = Math.floor(Math.random() * 15) + 3 // gerando numero aleatorio entre 3 e 17
                    let ataque = (20 - hp);// calc do ataque do vilao
                    // add os valores de atributos do vilao
                    esqueletos[0].nome = "Rei Caveira"
                    esqueletos[0].img = "../images/vilao.gif",
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
                container_herois.innerHTML = "" // limpa a tela removendo o heroi e vilao 
                hendleCards()// atualiza e renderiza  o heroi e o vilao na tela com as mudanças ocorridas
                container_herois.innerHTML+= html // add o heroi e o vilao ja com os dados atualizado na tela 
        
                document.querySelector(".foca_de_ataque").style.display = "flex"
                document.querySelector(".btns_ataques").style.display = "flex"
                card_start_jogo.style.display = "none"
                document.querySelector(".foca_de_ataque").textContent = ``
                document.querySelector(".foca_de_ataque").style.display = "flex"
                body.style.background = `#000 url("../images/morada.avif") no-repeat center / cover`
            }else{
                document.querySelector(".foca_de_ataque").style.display = "none"
            }

            document.querySelector(".entrarNaCaveerna").textContent = "Batalhar"
            document.querySelector(".explorar").style.display = "none"
            document.querySelector(".vida_vilao").textContent = `${esqueletos[0].vida}`
            document.querySelector(".vida_heori").textContent = `${herois[0].vida}`

        });
        
    };
});


// logica vilao ataca
btn_vilao.addEventListener("click", ()=>{
      
    if(!btn){
        btn = true;
        btn_vilao.style.opacity = "0.5"
        btn_heroi.style.opacity = "1"
    
        let ataque = Math.floor(Math.random() * 4) // 

        // condicao caso ataque seja maior que 0 entra no if caso ao contrario  heroi defendeu 
        if(ataque > 0){
            
            herois[0].vida = herois[0].vida - esqueletos[0].dano // removendo pontos de vida do heroi
            hendleCards()
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
        };

        document.querySelector(".vida_vilao").textContent = ` ${esqueletos[0].vida}`
        document.querySelector(".vida_heori").textContent = `${herois[0].vida}`

        if(herois[0].vida <= 0 ){

            document.querySelector(".btns_ataques").style.display = "none"
            document.querySelector(".foca_de_ataque").style.display = "none"
        
            card_start_jogo.style.display = "flex"
        
            card_start_jogo.innerHTML = `
                <h2>${herois[0].nome} Não foi dessa Vez!!</h2>
                <div class="paragrafo">
                    <p class="legenda">
                        O ${esqueletos[0].nome} Por quantos séculos mais <nome do inimigo> reinará nas sobras de nosso vale? Tudo fica escuro e quieto...
                    </p>
                </div>
                <div class="reload">
                    <h3>Game Over</h3>
                    <a  href="../herois/herois.html"><button class="entrarNaCaveerna">Jogar Novamente</button></button></a>
                </div>
            ` 
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
            container_herois.innerHTML = html
            container_herois.style.justifyContent = "center"
         
        };
    };
  
});
