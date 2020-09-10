var funcionario = {
    nombre: "Rodolfo",
    apellido: "Arce",
    edad: 25,
    direccion: "Mi calle 123",
    telefono: "595 021 123 456"
};

document.getElementById("funcionario").innerHTML = funcionario.nombre + " " + funcionario.apellido + " con " + funcionario.edad + " años de edad vive en " + funcionario.direccion + " puede localizarlo al teléfono " + funcionario.telefono;