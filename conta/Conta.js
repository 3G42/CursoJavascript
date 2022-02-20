import { Cliente } from "./Cliente.js";
export class Conta{
    
    constructor(saldoInicial,cliente,agencia){
        if(this.constructor == Conta){
            throw new Error("Operação inválida. Você não pode instanciar um objeto do tipo conta diretamente, pois é uma classe abstrata");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get saldo(){
        return this._saldo
    }


    get cliente(){
        return this._cliente
    }


    sacar(valor) {
        throw new Error("O método da classe Conta é abstrato");
    }
    _sacar(valor,taxa){
        const valorSacado = taxa*valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        if (valor < 100) return;
        this._saldo += valor;

    }

    transferir(valor,contaDest){
        const valorSacado = this.sacar(valor);
        contaDest.depositar(valorSacado);
    }
}