// # Instituto de Educação Superior de Brasília - Campus Liliane Barbosa #
// # Ana Raquel Afonco - 22114290049 #
// # Orion Teles # 
// # OADSNM2AB #
// # 06/03/2024 #

// Questão 1
// Faça um Programa que receba quatro notas de um aluno, calcule e imprima a
// média aritmética das notas e a mensagem de aprovado para média superior ou
// igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.
// a. Bônus: nenhuma nota pode passar de 10.
function calcularMediaEVerificarAprovacao(nota1, nota2, nota3, nota4) {
    if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10) {
        alert("As notas não podem ser maiores que 10!");
        return;
    }

    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 7.0) {
        alert("Média: " + media.toFixed(2) + "Você foi aprovado. Parabéns!");
    } else {
        alert("Média: " + media.toFixed(2) + " Você foi reprovado!");
    }
}

var nota1 = parseFloat(prompt("Insira a 1° nota: "));
var nota2 = parseFloat(prompt("Insira a 2° nota: "));
var nota3 = parseFloat(prompt("Insira a 3° nota: "));
var nota4 = parseFloat(prompt("Insira a 4° nota: "));

calcularMediaEVerificarAprovacao(nota1, nota2, nota3, nota4);



// Questão 2
// Escreva um script para ler o número total de eleitores de um município, o
// número de votos brancos, nulos e válidos. Calcular e escrever o percentual que
// cada um representa em relação ao total de eleitores.
// a. Bônus: A soma dos números não pode passar o total de eleitores.
function calcularPercentuais() {

    var totalEleitores = parseInt(prompt("Insira o número total de eleitores: "));

    var votosBrancos = parseInt(prompt("Insira o número de votos brancos: "));

    if (votosBrancos > totalEleitores) {
        alert("O número de votos brancos não pode exceder o número total de eleitores.");
        return;
    }

    var votosNulos = parseInt(prompt("Insira o número de votos nulos: "));

    if (votosNulos > totalEleitores) {
        alert("O número de votos nulos não pode exceder o número total de eleitores.");
        return;
    }

    var votosValidos = parseInt(prompt("Insira o número de votos válidos: "));

    if (votosValidos > totalEleitores) {
        alert("O número de votos válidos não pode exceder o número total de eleitores.");
        return;
    }

    var percentualBrancos = (votosBrancos / totalEleitores) * 100;
    var percentualNulos = (votosNulos / totalEleitores) * 100;
    var percentualValidos = (votosValidos / totalEleitores) * 100;

    console.log("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%");
    console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
    console.log("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");
}

calcularPercentuais();



// Questão 3
// Escreva um script para ler o salário mensal atual de um funcionário e o
// percentual de reajuste. Calcular e escrever o valor do novo salário.
function calcularNovoSalario() {
    var salarioAtual = parseFloat(prompt("Insira o salário mensal atual do funcionário: "));

    var percentualReajuste = parseFloat(prompt("Insira o percentual de reajuste: "));

    var valorReajuste = (salarioAtual * percentualReajuste) / 100;

    var novoSalario = salarioAtual + valorReajuste;

    console.log("Novo salário: R$ " + novoSalario.toFixed(2));
}

calcularNovoSalario();



// Questão 4
// O custo de um carro novo ao consumidor é a soma do custo de fábrica com a
// porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
// Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%,
// escrever um script para ler o custo de fábrica de um carro, calcular e escrever o
// custo final ao consumidor.
function calcularCustoFinal() {
    var custoFabrica = parseFloat(prompt("Insira o custo de fábrica do carro: "));

    var percentualDistribuidor = 0.28;
    var percentualImpostos = 0.45;

    var custoDistribuidor = custoFabrica * percentualDistribuidor;
    var custoImpostos = custoFabrica * percentualImpostos;

    var custoFinal = custoFabrica + custoDistribuidor + custoImpostos;

    console.log("O custo final ao consumidor é de R$ " + custoFinal.toFixed(2));
}

calcularCustoFinal();



// Questão 5
// O custo de um carro novo ao consumidor é a soma do custo de fábrica com a
// porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
// Escreva um script para ler o custo de fábrica de um carro, a porcentagem do
// distribuidor e o imposto, e calcular e escrever o custo final ao consumidor
// Função para calcular o custo final ao consumidor
function calcularCustoFinal(custoFabrica, porcentagemDistribuidor, imposto) {
    var percentualDistribuidor = porcentagemDistribuidor / 100;
    var percentualImposto = imposto / 100;

    var custoDistribuidor = custoFabrica * percentualDistribuidor;
    var custoImposto = custoFabrica * percentualImposto;

    var custoFinal = custoFabrica + custoDistribuidor + custoImposto;

    return custoFinal;
}

var custoFabrica = parseFloat(prompt("Insira o custo de fábrica do carro: "));
var porcentagemDistribuidor = parseFloat(prompt("Insira a porcentagem do distribuidor: "));
var imposto = parseFloat(prompt("Insira o imposto (%): "));

var custoFinal = calcularCustoFinal(custoFabrica, porcentagemDistribuidor, imposto);

console.log("O custo final ao consumidor é de R$ " + custoFinal.toFixed(2));



// Questão 6
// Uma revendedora de carros usados paga a seus funcionários vendedores um
// salário fixo por mês, mais uma comissão também fixa para cada carro vendido e
// mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o
// número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e
// o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
// vendedor.
function calcularSalarioFinal(carrosVendidos, valorVendas, salarioFixo, valorPorCarro) {
    var comissaoPorCarro = carrosVendidos * valorPorCarro;
    var comissaoPorVendas = valorVendas * 0.05;
    var salarioFinal = salarioFixo + comissaoPorCarro + comissaoPorVendas;
    return salarioFinal;
}

var carrosVendidos = parseInt(prompt("Insira o número de carros vendidos: "));
var valorVendas = parseFloat(prompt("Insira o valor total das vendas: "));
var salarioFixo = parseFloat(prompt("Insira o salário fixo do vendedor: "));
var valorPorCarro = parseFloat(prompt("Insira o valor recebido por carro vendido: "));

var salarioFinal = calcularSalarioFinal(carrosVendidos, valorVendas, salarioFixo, valorPorCarro);

console.log("O salário final do vendedor é de R$ " + salarioFinal.toFixed(2));



// Questão 7
// Faça um script que leia duas notas de um aluno, calcule e escreva a média final
// deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.
function calcularMedia(nota1, nota2) {
    const pesoNota1 = 4;
    const pesoNota2 = 6;
    
    const media = ((nota1 * pesoNota1) + (nota2 * pesoNota2)) / (pesoNota1 + pesoNota2);
    
    return media;
}

function calcularMediaFinal() {
    const nota1 = parseFloat(prompt("Insira a 1° nota:"));
    const nota2 = parseFloat(prompt("Insira a 2° nota:"));

    if (isNaN(nota1) || isNaN(nota2)) {
        console.log("Por favor, insira números válidos para as notas.");
        return;
    }

    const mediaFinal = calcularMedia(nota1, nota2);

    console.log("A média final do aluno é:", mediaFinal.toFixed(2));
}

calcularMediaFinal();



// Questão 8 
// Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo
// que o raio e a altura devem ser fornecidos.
function calcularVolumeCilindro(raio, altura) {
    const pi = Math.PI;
    
    const volume = pi * Math.pow(raio, 2) * altura;
    
    return volume;
}

function calcularVolumeCaixaDagua() {
    const raio = parseFloat(prompt("Insira o raio da caixa d'água (em metros):"));
    const altura = parseFloat(prompt("Insira a altura da caixa d'água (em metros):"));

    if (isNaN(raio) || isNaN(altura) || raio <= 0 || altura <= 0) {
        console.log("Por favor, insira valores válidos para o raio e a altura.");
        return;
    }

    const volume = calcularVolumeCilindro(raio, altura);

    console.log("O volume da caixa d'água é:", volume.toFixed(2), "metros cúbicos.");
}

calcularVolumeCaixaDagua();



// Questão 9
// Faça um script para somar dois números e multiplicar o resultado pelo primeiro
// número.
// Função para somar dois números e multiplicar o resultado pelo primeiro número
function somarMultiplicar(num1, num2) {
    const soma = num1 + num2;
    
    const resultado = soma * num1;
    
    return resultado;
}

function calcularOperacoes() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Por favor, digite números válidos.");
        return;
    }

    const resultado = somarMultiplicar(num1, num2);
    console.log("O resultado da soma dos números multiplicado pelo primeiro número é:", resultado);
}

calcularOperacoes();
