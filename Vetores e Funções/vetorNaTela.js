let valores = [8, 1, 7, 4 ,2, 9];
/*
for (let i = 0; i < valores.length; i++) {
    console.log("A posição " + i + " tem o valor " + valores[i] + ".");
}
*/
for (let i in valores) {
    console.log("A posição " + i + " tem o valor " + valores[i] + ".");
}

//valores.indexOf[7] -> Índice do valor 7(se houver). Índice -1 se não houver.