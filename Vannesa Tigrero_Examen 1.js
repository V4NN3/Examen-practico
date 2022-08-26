let salarioBase = 265;
let horasOrdinarias = prompt("Cuantas horas ordinarias trabajo?");
let salarioHoraExtra= 350;
let horasExtras= prompt("Cuantas horas extraordinarias trabajo?");;

let total1 = salarioBase * horasOrdinarias;
let total2 = salarioHoraExtra * horasExtras;

console.log(" El total a pagar por horas laborales normal es: " + total1);
console.log("\n");
console.log(" El total a pagar por horas extra " + horasExtras + " hrs es: " + total2);
