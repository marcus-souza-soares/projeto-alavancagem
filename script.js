let operacao = "";
let valorInicial;
let alavancagem;
let porcentagemStop;
let precoFinal;

function Operacao(elemento) {
  operacao = elemento.innerText;

  if (!elemento.classList.contains("selecionado")) {
    elemento.classList.add("selecionado");
  }
  if (operacao === "Comprar") {
    document.querySelector(".venda").classList.remove("selecionado");
  } else if (operacao === "Vender") {
    document.querySelector(".compra").classList.remove("selecionado");
  }
}

function PorcentagemGanho(elemento) {
  document.querySelector("#ganho").innerText =
    "Porcentagem ganho: " + elemento.value;
  document.querySelector("#expected").innerText =
    "Expected: " +
    (isNaN(valorInicial)
      ? 0
      : (calcPercentWin(elemento.value)).toFixed(4));
}

function Calcular() {
  if (operacao === "") {
    alert("Precisa definir a operação!");
    return;
  }
  valorInicial = document.getElementById("preco-operacao").value;
  valorInicial = valorInicial.replace(",", ".");
  alavancagem = document.getElementById("alavancagem").value;
  porcentagemStop = document.getElementById("porcentagem-stop").value;

  precoFinal = calcPercentLoss(porcentagemStop);

  precoFinal = precoFinal.toFixed(4);
  if (isNaN(precoFinal)) {
    alert("Preencha todos os campos corretamente");
  }
  document.querySelector(
    ".resultado h1"
  ).innerHTML = `O valor de stop deve ser: ${precoFinal}`;
}

function calcPercentLoss(percent) {
  if (operacao === "Comprar") {
    return valorInicial * (1 - percent / (100 * alavancagem));
  } else if (operacao === "Vender") {
    return valorInicial * (1 + percent / (100 * alavancagem));
  }
}

function calcPercentWin(percent) {
    if (operacao === "Vender") {
      return valorInicial * (1 - percent / (100 * alavancagem));
    } else if (operacao === "Comprar") {
      return valorInicial * (1 + percent / (100 * alavancagem));
    }
  }
  