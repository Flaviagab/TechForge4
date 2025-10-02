//Exercício 4
class Temperatura{
    private valor: number

    constructor(valor: number){
        this.valor = valor
    }

    public converterFahrenheit(): number{
        return (this.valor * 9/5) + 32;
    }

    public converterKelvin(): number{
        return this.valor + 273.15;
    }
}

// Exemplo
const temp = new Temperatura(25)
console.log("Fahrenheit: " + temp.converterFahrenheit())
console.log("Kelvin: " + temp.converterKelvin())