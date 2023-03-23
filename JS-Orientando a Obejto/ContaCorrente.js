import { Cliente } from "./Cliente.js";

export class ContaCorrente{
     static numeroDeContas = 0;
      // #saldo https://github.com/tc39/proposal-class-fields#private-fields
      _saldo = 0;
    


    // set serve para atribuir um valor
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
        this._cliente = novoValor;
        }
    }

    // Tem a função de retornar um valor
    get Cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }


    constructor (agencia, cliente){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;

        }        
    }
    
    depoistar(valor){
        if(valor <= 0){
            return;
        }  

        this._saldo += valor;
    
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depoistar(valorSacado);

    }
}