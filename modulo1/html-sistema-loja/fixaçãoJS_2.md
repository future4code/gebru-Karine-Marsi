```javascript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let precoMeiaDuzia = 1.3
  let precoUmaDuzia = 1.00
  let custoTotal  
   if(quantidade < 12){
      custoTotal = precoMeiaDuzia * quantidade;
      }else{
        custoTotal = precoUmaDuzia * quantidade;
     
   }
    return custoTotal
}

´´´