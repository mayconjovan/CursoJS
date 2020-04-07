var blg = (function () {
    var beluga = {};
    beluga.$ = document.querySelector.bind(document);
    beluga.$$ = document.querySelectorAll.bind(document);

    Array.prototype.getMedia = function(){
        return _calcularMedia(...this)
    };


    function _calcularMedia() {
        let params = arguments;

        let hasNaN = Array.prototype.some.call(params, (n) => isNaN(n));

        if(hasNaN) throw new Error('somente números');

        let total = Array.prototype.reduce.call(params, function(total, atual, i){
            return total + parseFloat(atual);
        })
        return total / arguments.length;
    }
    beluga.calcularMedia = _calcularMedia;

    function _each(seletor, fn){
        var _sel = this.$$(seletor)
        Array.prototype.forEach.call(_sel, fn)
    }
    beluga.each = _each;
    return beluga;

})()