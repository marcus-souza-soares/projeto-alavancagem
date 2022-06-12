let operacao = "";
let valorInicial;
let alavancagem;
let porcentagemStop;
let precoFinal;

function Operacao(elemento) {
    operacao = elemento.innerText;

    if (!elemento.classList.contains('selecionado')) {
        elemento.classList.add('selecionado');

        if (operacao === 'Compra') {
            if(document.querySelector('.venda').classList.contains('selecionado')){
                document.querySelector('.venda').classList.remove('selecionado');
            }
        } else if (operacao === 'Venda') {
            if(document.querySelector('.compra').classList.contains('selecionado')){
                document.querySelector('.compra').classList.remove('selecionado');
            }
        }
    }
    console.log(operacao)
}

function Calcular() {
    if(operacao === ''){
        alert('Precisa definir a operação!');
        return
    }
    valorInicial = document.getElementById("preco-operacao").value;
    valorInicial = valorInicial.replace(',','.');
    alavancagem = document.getElementById("alavancagem").value;
    porcentagemStop = document.getElementById("porcentagem-stop").value;

    valorInicial = Number(valorInicial);
    alavancagem = Number(alavancagem);
    porcentagemStop = Number(porcentagemStop);

    if (operacao === 'Compra'){
        precoFinal = valorInicial * (1 + (porcentagemStop / (100 * alavancagem)));
    } else if (operacao === 'Venda'){
        precoFinal = valorInicial * (1 - (porcentagemStop / (100 * alavancagem)));
    }
    precoFinal = precoFinal.toFixed(4);
    if (isNaN(precoFinal)){
        alert('Preencha todos os campos corretamente');
    }
    document.querySelector(".resultado h1").innerHTML = `O valor de stop deve ser: ${precoFinal}`;

}