let amigos = [];


function agregarAmigo()
{
    let amigo = document.getElementById("amigo").value; //Captura el valor del campo de entrada
    if (amigo == "") //valida la entrada
    {
        alert("Por favor, inserte un nombre");
    }
    else 
    {
        if (amigos.includes(amigo))
        {
            alert("Este amigo ya existe"); //Evita duplicados
            limpiarcaja(); //Limpia el campo de entrada
        }
        else 
        {
            amigos.push(amigo); //Actualiza lista de amigos
            limpiarcaja(); //Limpia el campo de entrada
            mostrarAmigos(); //Muestra los amigos
        }
    }
    
}


function limpiarcaja(){
    document.querySelector('#amigo').value = '';
}


function mostrarAmigos()
{
    let lista = document.getElementById("listaAmigos"); //Obtener el elemento de la lista
    lista.innerHTML = ""; //Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) //iterar sobre la lista
    { 
        let itemLista = document.createElement("li");
        itemLista.textContent = amigos[i];
        lista.appendChild(itemLista); //agregar elementos a la lista para cada amigo
    }
}


function sortearAmigo() {
    if (amigos.length === 0) 
    {
        alert("No hay amigos en la lista. Agrega algunos nombres primero.");
        return; // Sale de la función si no hay amigos
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); //Generar un índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; //Obtener el nombre sorteado
    
    let elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`; //Mostrar el resultado
}
