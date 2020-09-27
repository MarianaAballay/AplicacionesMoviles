class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {
        return "Mi nombre es " + this.nombre + " y tengo " + this.edad + " años";
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, profesor) {
        super(nombre, edad);
        this.profesor = profesor;
    }

    estudiando() {
        return "Estudiando con " + this.profesor;
    }

    setProfesor(profesor) {
        this.profesor = profesor
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, estudiantes) {
        super(nombre, edad);
      this.estudiantes = estudiantes;
    }

    enseñando() {
       this.estudiantes.forEach(x => console.log(x.nombre));
    }

    addEstudiante(est) {
        est.setProfesor(this.nombre);
        this.estudiantes.push(est);
    }
}

var alumnos = [
    new Estudiante("Clemente", 21, "Juan Carlos"),
    new Estudiante("Sofía", 19, "Juan Carlos")
];

var profesor = new Profesor("Juan Carlos", 38, alumnos);
console.log(profesor.presentarse());
profesor.addEstudiante(new Estudiante("Daniel", 20));
console.log(profesor.enseñando());