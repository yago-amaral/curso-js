class Person {
    constructor(first, last, idade, genero, interesses) {
        this.nome = {
            first: first,
            last: last
        }
        this.idade = idade;
        this.genero = genero;
        this.interesses = interesses;
    }
    saudacao() {
        let nome = `${this.nome.first} ${this.nome.last}`;
        console.log(`Oi! Eu sou ${nome}.`);
    }
}

class Teacher extends Person {
    constructor(first, last, idade, genero, interesses, materia) {
        super(first, last, idade, genero, interesses); // executa o construtor da super-classe com os parâmetros da classe filha(Teacher)
        this._materia = materia;
    }

    get materia() { // Método Getter
        return this._materia;
    }
    
    set materia(nMateria) { // Método Setter
        this._materia = nMateria;
    }

    saudacao() {
        let prefixo;
        switch(this.genero) {
            case "M":
            case "m":
                prefixo = "o Sr.";
                break;
            case "F":
            case "f":
                prefixo = "a Sra.";
                break;
        }
        console.log(`Olá! Eu sou ${prefixo} ${this.nome.last} e eu ensino ${this.materia}.`);
    }
}

class Student extends Person {
    constructor(first, last, idade, genero, interesses) {
        super(first, last, idade, genero, interesses);
    }

    saudacao() {
        console.log(`Yo! Eu sou ${this.nome.first}.`);
    }
}

const person = new Person("Will", "Smith", 46, "M", "ser o Will Smith");
const teacher = new Teacher("Will", "Smith", 46, "M", "ser o Will Smith", "como ser o Will Smith");
const student = new Student("Jaden", "Smith", 19, "M", "ser filho do Will Smith");
person.saudacao();
teacher.saudacao();
student.saudacao();