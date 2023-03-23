import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 137548465 );

const cliente2 = new Cliente("Alice", 22312313221 );

const ContaCorrenteRicardo = new ContaCorrente(1001, cliente1);
ContaCorrenteRicardo. depoistar(500);

const conta2 = new ContaCorrente(cliente1, 102);

console.log(ContaCorrente.numeroDeContas);



