function adicionar(valor) {
    const visor = document.getElementById('visor');
    visor.value= visor.value + valor;

}

function limpar () {
    const visor =documen.getElementById('visor');
    visor.value = '';
}
 function calcular() {
    const visor = document.getElementById('visor');

    try {
        const resultado = eval(visor.value);

        if (resultado !== undefined) {
            visor.value = resultado;
        }
    }   catch (erro) {
        visor.value = 'Erro';
    } 
 }