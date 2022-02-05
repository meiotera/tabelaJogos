let listaClubes = [];

function validarClube() {
    let inClube = document.getElementById('inClube');    
    let nomeClube = inClube.value;

    if(nomeClube === '') {
        alert('Informe o nome do clube');
        inClube.focus();
        return;
    }
    listaClubes.push(nomeClube);
    
    inClube.value = '';
    inClube.focus();    

    listarClubes() 
}
let btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', validarClube);

function listarClubes() {

    if(listaClubes.length === 0) {
        alert('Nao a times inseridos');
        return;
    }
    let lista = '';

    for(let i = 0; i < listaClubes.length; i++) {
        lista += (i + 1) + '. '+ listaClubes[i] + '\n';
    }    
   document.getElementById('outLista').textContent = lista;
}
let btListar = document.getElementById('btListar');
btListar.addEventListener('click', listarClubes);

function montarTabela() {
    let tabela = '';
    let copiaListaClube = listaClubes.slice();
    
    contador = 0;

   if(copiaListaClube.length % 2 === 0 ) {

        while(contador < listaClubes.length / 2) {
            let clubeA = copiaListaClube.shift();
            let clubeB = copiaListaClube.pop();               
            
            tabela += clubeA + ' x ' + clubeB + '\n';
            contador++;
        }    
   } else {
        alert('Times insuficientes para campeonato')
        return;      
   }    
   document.getElementById('outLista').textContent = tabela;
}
let btTabela = document.getElementById('btTabela');
btTabela.addEventListener('click', montarTabela);