var salario=0;
var salarioBase= parseFloat(prompt("salario"));
var horaSemanalTrabalhada = parseFloat(prompt("horas semanais trabalhadas"));
var hora=salarioBase/160;//160==40h carga trabalhada  * 4 semanas do mes (aproximado)
var horaExtra = hora *1.5;
if (horaSemanalTrabalhada>=40){
    salario= salarioBase +(horaExtra*(horaSemanalTrabalhada-40));
alert("salario Bruto: "+salario + "\nsalarioLiquido:" + salario*0.975);//isscalculado 2,5% 
}
else {
    salario=salarioBase-(horaSemanalTrabalhada*hora);
    alert("salario R$salarioBruto");

}
 