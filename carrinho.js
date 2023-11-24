alert ("supermercado do torquato");
let produtos=0, preço=0, preçototal=0;
while (preço!=-1){
  preço= parseFloat( prompt ("preço R$"));
  preçototal += preço;
  produtos ++;

}
preçototal +=1;
produtos-=1;
alert ("quantidade "+produtos +"R$" + preçototal);
