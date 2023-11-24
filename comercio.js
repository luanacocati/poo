var produto =prompt ("valor do produto");
var porcentagem = prompt("porcentagem(sem o simbolo)");
var op =prompt ("1.desconto \n2.lucro");
switch(op){
    case '1':
    alert ( produto*(1-(porcentagem/100)));break
    case'2':
    alert (produto* (1+(porcentagem/100)));break;
    default: 
    alert("opcao invalida");
}
 