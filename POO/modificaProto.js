function Objeto(propriedade1, propriedade2, propriedade3) {
    this.propriedade1 = propriedade1;
    this.propriedade2 = propriedade2;
    this.propriedade3 = propriedade3;
}

let objeto1 = new Objeto("valor1", "valor2", "valor3");

Objeto.prototype.descrever = function() {
    console.log(`No objeto temos ${this.propriedade1}, ${this.propriedade2} e ${this.propriedade3}.`);
}

Objeto.prototype.adicionarPropriedade = function(nome, valor) {
    this[nome] = valor;
}

objeto1.adicionarPropriedade("dizerOla", function() {
    console.log("Olá!");
    console.log("Função dizerOla esteve aqui");
});

objeto1.dizerOla();