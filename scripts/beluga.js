function calcularMedia() {
    var total = 0;
    var qtd = arguments.length;
    var x = 0;

    while(typeof arguments[x] === 'number'){
    //while(typeof arguments[x]){ nao captura valores ZERO
        total += arguments[x];                    
        x++;
    }
    return total / qtd;
}