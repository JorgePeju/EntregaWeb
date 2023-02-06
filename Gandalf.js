let miembros = ["Frodo", "Sam", "Pippin", "Merry", "Aragorn", "Legolas", "Gimly", "Boromir"];

let primero = miembros[0];

let ultimo = miembros[miembros.length - 1];

function add(){
    alert("Se ha añadido a "+ miembros[miembros.length-1]);
    miembros.push(miembros);
    console.log(miembros);
}

function del(){
    alert("Se ha eliminado a "+ miembros[miembros.length-1]);
    ultimo = miembros.pop();
    console.log(miembros);
}