const express = require('express')
const router = express.Router()


router.post('/q1', function(req, res){

    const {qtdMinima, qtdMaxima}  = req.body;

    const estoqueMedio = (Number(qtdMinima) + Number(qtdMaxima)) / 2;

    res.json({estoqueMedio});
});

router.post('/q2', function(req, res){

    const {nome, horasTrabalhadas, valorHora, filhos} = req.body

    const salarioBruto = horasTrabalhadas * valorHora
    const bonificacaoFilhos = 0.03 * salarioBruto * filhos
    const salarioFinal = salarioBruto + bonificacaoFilhos

    res.json({nome, salarioBruto, bonificacaoFilhos, salarioFinal})
})

router.post('/q3', function(req, res){

    const {anos, meses, dias} = req.body;

    const anosEmDias = Number(anos) * 365;
    const mesesEmDias = Number(meses) * 30;
    const diasCalculado = Number(dias) + anosEmDias + mesesEmDias;

    res.json({diasCalculado});
});

router.post('/q4', function(req, res){

    const {idade} = req.body;

    const anos = Number(idade) / 365;
    const meses = (Number(idade) % 365) / 30;
    const dias = (Number(idade) % 365) % 30;

    res.json({anos, meses, dias});
});

router.post('/q5', function(req, res){

    const {nota1, nota2, nota3} = req.body;

    const mediaNotas = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10;
    res.json({mediaNotas});
});

router.post('/q6', function(req, res){

    const {duracaoEmSegundos} = req.body;

    const moduloSegundos = Number(duracaoEmSegundos) % 3600;
    const hora = Math.floor(Number(duracaoEmSegundos) / 3600);
    const minutos = Math.floor(moduloSegundos / 60);
    const segundos = moduloSegundos % 60;

    res.json({hora, minutos, segundos});
});

router.post('/q7', function(req, res){

    const {nome, salarioFixo, porcentagem, valorEmVendas} = req.body;

    const salarioFinal = Number(salarioFixo) + ((Number(porcentagem) * Number(valorEmVendas)) / 100);

    res.json({
        'nome': nome,
        'salarioFinal': salarioFinal
    });
});

router.post('/q8', function(req, res){

    const {nome, distanciaPercorrida, tempo} = req.body;

    const velocidadeMedia = Number(distanciaPercorrida) / Number(tempo);
    const resposta = 'A velocidade média do ' + nome + ' foi ' + velocidadeMedia + 'km/h';

    res.json({resposta});
});

router.post('/q9', function(req, res){
    
    const {salario} = req.body;

    const msg = 'Empregado não elegível para o reajuste!';

    if (Number(salario) > 1000) {
        res.json({msg});

    } else {
        const salarioAtualizado = Number(salario) + (Number(salario) * 30/100);
        res.json({salarioAtualizado});
    }
});

module.exports = router
