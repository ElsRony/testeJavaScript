//teste 1 SOMA= 91
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA); // Imprime o valor final de SOMAs



//teste 2

function pertenceFibonacci(num) {
    if (num < 0) {
        return "O número não pertence à sequência de Fibonacci.";
    }

    let a = 0;
    let b = 1;

    while (a <= num) {
        if (a === num) {
            return "O número pertence à sequência de Fibonacci.";
        }
        let temp = a;
        a = a + b;
        b = temp;
    }

    return "O número não pertence à sequência de Fibonacci.";
}

// Testando a função com um número
let numero = 21; // Altere o valor para testar com outros números
console.log(pertenceFibonacci(numero));




//teste 3

// Dados de faturamento diário em formato JSON
const faturamentoDiario = [
    { "dia": 1, "faturamento": 500 },
    { "dia": 2, "faturamento": 300 },
    { "dia": 3, "faturamento": 0 },
    { "dia": 4, "faturamento": 200 },
    { "dia": 5, "faturamento": 700 },
    { "dia": 6, "faturamento": 0 },
    { "dia": 7, "faturamento": 400 }
];

function calcularFaturamento(faturamentoDiario) {
    // Filtrar os dias com faturamento
    const faturamentos = faturamentoDiario.filter(dia => dia.faturamento > 0);

    // Calcular o menor e o maior valor de faturamento
    const menorFaturamento = Math.min(...faturamentos.map(dia => dia.faturamento));
    const maiorFaturamento = Math.max(...faturamentos.map(dia => dia.faturamento));

    // Calcular a média mensal
    const somaFaturamento = faturamentos.reduce((total, dia) => total + dia.faturamento, 0);
    const numeroDiasComFaturamento = faturamentos.length;
    const mediaMensal = somaFaturamento / numeroDiasComFaturamento;

    // Contar o número de dias com faturamento acima da média
    const diasAcimaDaMedia = faturamentos.filter(dia => dia.faturamento > mediaMensal).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

// Executar o cálculo
const resultado = calcularFaturamento(faturamentoDiario);

// Mostrar o resultado
console.log(`Menor valor de faturamento: ${resultado.menorFaturamento}`);
console.log(`Maior valor de faturamento: ${resultado.maiorFaturamento}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);


//teste 4

// Faturamento mensal por estado
const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Função para calcular o percentual de representação
function calcularPercentuais(faturamento) {
    // Calcular o valor total mensal
    const totalMensal = Object.values(faturamento).reduce((total, valor) => total + valor, 0);
    
    // Calcular o percentual de cada estado
    const percentuais = {};
    for (let estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / totalMensal) * 100).toFixed(2) + '%';
    }
    
    return percentuais;
}

// Executar o cálculo
const percentuais = calcularPercentuais(faturamentoEstados);

// Mostrar o resultado
console.log('Percentual de representação por estado:');
for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}`);
}

//teste 5

// Função para inverter uma string
function inverterString(str) {
    let resultado = ''; // String para armazenar o resultado

    // Iterar sobre a string do final para o início
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }

    return resultado;
}

// Exemplo de uso
const stringOriginal = "Exemplo de string";
const stringInvertida = inverterString(stringOriginal);

console.log(`String Original: ${stringOriginal}`);
console.log(`String Invertida: ${stringInvertida}`);
