class Calculadora {
    numero:number = 0;

    constructor(valor:number){
        console.log('iniciando calculadora chulo...')
        this.numero = valor;
        console.log(this.numero);
    }
    sumar(){
        return this.numero + this.numero;
    }
}
let calcA = new Calculadora(10);

console.log(calcA.sumar());

let calB = new Calculadora(15);

console.log(calB.sumar());