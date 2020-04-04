function calcularMedia() {
    var total = 0;
    var qtd = arguments.length;
    var x = 0;

    while (typeof arguments[x] === 'number') {
        //while(typeof arguments[x]){ nao captura valores ZERO
        total += arguments[x];
        x++;
    }
    return (total / qtd).toFixed(2);
}


function sortear(n) {

    var _n = n || 1;
    var nSorteado = Math.random();
    nSorteado = nSorteado * _n;
    nSorteado = Math.floor(nSorteado);


    return nSorteado;
};