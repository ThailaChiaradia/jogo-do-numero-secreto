let listaDeNumerosSorteados = []
let numeroLimite = 200;
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 0

function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMensagemInicial()
{
    exibirTextoNaTela('h1', 'JOGO DO NÚMERO SECRETO')
    exibirTextoNaTela('p', `Escolha um número entre 1 a ${numeroLimite}`)

}

exibirMensagemInicial()

function verificarChute()
{   tentativas++
    
    let chute = document.querySelector('input').value
    if(chute == numeroSecreto)
    {
        exibirTextoNaTela('h1', 'ACERTOU!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else if(chute > numeroSecreto)
    {
        exibirTextoNaTela('h1', 'ERROU!')
        exibirTextoNaTela('p', 'O número secreto é menor')
        limparCampo()
    }
    else
    {
        exibirTextoNaTela('h1', 'ERROU!')
        exibirTextoNaTela('p', 'O número secreto é maior')
        limparCampo()
    }   
    
}

function gerarNumeroAleatorio()
{
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if(quantidadeDeElementosNaLista == numeroLimite)
    {
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido))
    {
        return gerarNumeroAleatorio();
    }
    else
    {
        listaDeNumerosSorteados.push(numeroEscolhido)//inclui dado ao final do vetor listaDeNumeros...
        return numeroEscolhido
    }
}

function limparCampo()
{
    chute = document.querySelector('input')
    chute.value = ' '
}

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 0
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

