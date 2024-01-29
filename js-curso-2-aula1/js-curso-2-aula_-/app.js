let listaDeNumerosSorteados = [];
let numeroLimite= 10;
let numeroAleatório = gerarNumeroAleatorio();
let tentativas= 1;


function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function exebirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo secreto');
    exibirTextoNaTela('p', 'Escolher um numero entre 1 e 10 ')
}
exebirMensagemInicial()

function verificarChute(){
    let chute= document.querySelector('input').value;
    if (chute == numeroAleatório){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativas = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas=`Você acertou o numero secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroAleatório){
            exibirTextoNaTela('p','O número secreto é menor');
        }
        else{
            exibirTextoNaTela('p','O número secreto é maior');
        }
    }tentativas++
    limparCampo() 
}

function gerarNumeroAleatorio() {
    let numeroEscolido=  parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeElementosNaLista= listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista==numeroLimite){
        listaDeNumerosSorteados= [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolido;
    }
}
function limparCampo(){
    chute= document.querySelector('input');
    chute.value= ''
}
function reiniciarJogo(){
    numeroAleatório= gerarNumeroAleatorio();
    limparCampo();
    tentativas= 1;
    exebirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}



