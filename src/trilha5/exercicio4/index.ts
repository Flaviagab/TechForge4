import { Election } from "./Election.js"; 
import { Poll } from "./Poll.js";

const eleicao = new Election();
eleicao.votarEm("Ana");
eleicao.votarEm("Ana");
eleicao.votarEm("Pedro");

console.log("Resultados da Eleição:");
console.log(eleicao.obterResultados());

const enquete = new Poll();
enquete.votarEm("JavaScript");
enquete.votarEm("Python");
enquete.votarEm("Python");

console.log("Resultados da Enquete:");
console.log(enquete.obterResultados());
