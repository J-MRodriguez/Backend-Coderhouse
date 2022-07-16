/*
*1) Declarar una clase Usuario

*2) Hacer que Usuario cuente con los siguientes atributos:
nombre: String
apellido: String
libros: Object[]
mascotas: String[]

*Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.

*3) Hacer que Usuario cuente con los siguientes métodos:
getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.
*4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.

*/

class Usuario {
	constructor(nombre, apellido) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.libros = [];
		this.mascotas = [];
	}
	getFullName() {
		if (!this.nombre || !this.apellido) {
			return 'ingresar un nombre y apellido';
		} else {
			return `${this.nombre} ${this.apellido}`;
		}
	}
	addMascota(mascota) {
		if (!mascota) {
			console.log('ingresar una mascota');
		} else {
			this.mascotas.push(mascota);
		}
	}
	countMascotas() {
		return this.mascotas.length;
	}
	addBook(nombre, autor) {
		if (!nombre || !autor) {
			console.log('ingresar un nombre y autor del libro');
		} else {
			this.libros.push({ nombre, autor });
		}
	}
	getBookNames() {
		const bookNames = [];
		this.libros.forEach((book) => {
			bookNames.push(book.nombre);
		});
		return bookNames;
	}
}

const usuario = new Usuario('juan', 'Rodriguez');
console.log(usuario.getFullName());

usuario.addMascota('perro');
usuario.addMascota('gato');

console.log(usuario.countMascotas());

usuario.addBook('El señor de las moscas', 'William Golding');
usuario.addBook('Fundacion', 'Isaac Asimov');

console.log(usuario.getBookNames());
