var Calculadora = /** @class */ (function () {
    function Calculadora(valor) {
        this.numero = 0;
        console.log('iniciando calculadora chulo...');
        this.numero = valor;
        console.log(this.numero);
    }
    Calculadora.prototype.sumar = function () {
        return this.numero + this.numero;
    };
    return Calculadora;
}());
var calcA = new Calculadora(10);
console.log(calcA.sumar());
var calB = new Calculadora(15);
console.log(calB.sumar());
