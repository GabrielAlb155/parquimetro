class Parquimetro {
  constructor(valor) {
    this.valor = valor;
  }

  calcular() {
    if (this.valor < 1) {
      return "Valor insuficiente. O mínimo é R$ 1,00.";
    }

    if (this.valor >= 3) {
      return `Tempo: 120 minutos<br>Troco: R$ ${(this.valor - 3).toFixed(2)}`;
    }

    if (this.valor >= 1.75) {
      return `Tempo: 60 minutos<br>Troco: R$ ${(this.valor - 1.75).toFixed(2)}`;
    }

    return `Tempo: 30 minutos<br>Troco: R$ ${(this.valor - 1).toFixed(2)}`;
  }
}

function calcularParquimetro() {
  const valor = Number(document.getElementById("valor").value);
  const resultado = document.getElementById("resultado");

  if (!valor) {
    resultado.innerHTML = "Digite um valor válido.";
    return;
  }

  const parquimetro = new Parquimetro(valor);
  resultado.innerHTML = parquimetro.calcular();
}