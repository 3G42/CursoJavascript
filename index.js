import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789");

const gerente = new Diretor("Ricardo",  5000, 12345780100);
gerente.cadastrarSenha("122");

const cliente = new Cliente("Lais",78496273220,"476");

const clienteEstalogado = SistemaAutenticacao.login(cliente, "456");
const gerenteEstalogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstalogado = SistemaAutenticacao.login(diretor, "123456789");

console.log(clienteEstalogado,gerenteEstalogado,diretorEstalogado);