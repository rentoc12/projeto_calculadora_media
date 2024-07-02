const form = document.getElementById('form-atividade')
const ImgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />'
const ImgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">reprovado</span>';
const notaMinima = parseFloat(prompt("digite a nota minima:"))
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    
    if (atividades.includes(inputNomeAtividade.value)) {
        alert (`A atividade: ${inputNomeAtividade.value} ja foi inserida`)
    } else{

    

    atividades.push(inputNomeAtividade.value); 
    atividades.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >=notaMinima ? ImgAprovado : ImgReprovado}</td>`;
    linha += `</tr>`

    linhas += linha;
    }

    ///alert(`atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasnotas = 0;

    for (let i =0; i < notas.length; i++) {
        somaDasnotas += notas[i];
    }

    return somaDasnotas / notas.length;
}