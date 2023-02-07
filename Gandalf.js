let miembros=["Frodo", "Sam", "Pippin", "Merry", "Aragorn", "Legolas", "Gimly", "Boromir"];

console.log(miembros);

console.log(miembros.length);

let primero = miembros[0]

let ultimo = miembros[miembros.length - 1];


function add(){
    alert("Se ha añadido a "+ miembros[miembros.length -1]);
    let nuevaLongitud = miembros.push(miembros[miembros.length -1]);
    console.log(miembros);
}

function del(){
    alert("Se ha eliminado a "+ miembros[miembros.length -1]);
    ultimo = miembros.pop();
    console.log(miembros);
}



