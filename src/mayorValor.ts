function mayorValor(entrada: number []) {
  let total: number = entrada.length;
  let mayor: number = 0;
  if (total > 0) {
    mayor = entrada[0];
    if (total > 1) {
      for( let i = 0; i < total; i++) {
        if(entrada[i] > mayor)
        //si quiero saber el menor valor solo
        //debo cambiar el signo < 
        mayor = entrada[i];
      }
    }
  }
  console.log("mayor valor: " + mayor)
}

mayorValor([5,8,9,6,4,5,8,3]);
