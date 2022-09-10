function Objeto(propriedade1, propriedade2, propriedade3) {
    this.propriedade1 = propriedade1;
    this.propriedade2 = propriedade2;
    this.propriedade3 = propriedade3;
}

Objeto.prototype.metodo1 = function() {
    console.log(`No objeto temos ${this.propriedade1}, ${this.propriedade2} e ${this.propriedade3}.`);
};

let objeto1 = new Objeto("valor1", "valor2", "valor3");
console.log(objeto1 instanceof Objeto); // true