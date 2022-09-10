function Person(first, last, age, gender, interests) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.greeting = function() {
    console.log(`Hi! I'm ${this.name.first} ${this.name.last}.`);
}

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

Object.defineProperty(Teacher.prototype, "constructor", { // Define ou configura uma propriedade em um objeto (neste caso: constructor)
    value: Teacher,
    enumerable: false, // para não aparecer no laço "for in"
    writable: true
});

Teacher.prototype.greeting = function() {
    let prefix;
    switch (this.gender) {
        case "male":
        case "m":
        case "Male":
        case "M":
            prefix = "Mr.";
            break;
        case "female":
        case "f":
        case "Female":
        case "F":
            prefix = "Mrs.";
            break;
    }
    console.log(`Hello. My name is ${prefix} ${this.name.last} and I teach ${this.subject}.`);
}

const teacher = new Teacher("Will", "Smith", 45, "male", ["being Will Smith"], "How to be Will Smith");
teacher.greeting();