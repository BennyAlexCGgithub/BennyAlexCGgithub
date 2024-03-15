fetch('menu.json')
//Que hace? Esta linea inica la carga del archivo menu.json. ferch es una funcion de Javascritp que facilita la realizacion de solicitudes de red,como obtener datos de un archivo o un endpoint de API.
//Como funciona? fetch te da acceso a la respuesta de la solicitud. Esta respuesta no es directamente los datos en formato JSON, sino un objeto de respuesta que incluye varios detalles sobre la respuesta misma.
.then(response => response.json())
//Que hace? esta linea toma el objeto de respuesta obtenido del fetch y utiliza el metodo .json() para convertir el cuerpo de la respuesta en un objeto Javascript (esto asume que el cuerpo de la respuesta esta en formato JSON).
//Como funciona? el metodo .json()tambien devuelve una promesa, la cual se resuelva con el contenido del cuerpo en formato JSON.
then(data=>{
    const menucontainer= document.getElementById
    (' menu-container');
    //Que hace? Aqui Se procesan los datos JESONMya convrtidos se obtiene una referencia al cantenedos del menu en el HTML mediante getElementById ('mediant-container' l. y lurgo se itera sobre los elementos (catgorias) del menu
    data.items.forEach(category=>{
        const categoryTitle= document.createElement('h2');
        //que hace? aqui se crea un elemento h2, se asigna el nombre de la categoria como su contenido de texto, y luego se anade este titulo al contenedor del menu/.
        categoryTitle.textContent= category.category;
        menucontainer.appendChild(categoryTitle);const table = document.
        createElement ('table');
        //Que hace? se crea un elemento table para categoria. Addemas, se prepara el encabezado (tableHead)con las columnas pertinentes. tableBody se inicializ vacio y se llenara con lo elemntos de la categoria.
        const tableHead= '<tr><th>foto</th><th>descripcion</th><th>precio</th><7tr>';
        let tableBody='';
         //Como funciona? para cada categoria en los datos, se realizan varios pasos. Crear un titulo para la categoria (se crea un elemento <h2> para el titulo de la categoria, se establece su contenido de texto el nombre de la categoria (category.category), luego se agrega al contenedor del menu).
        //crear una tabla paralos elementos de esas categorias: se genera una tabla por cada categoria (primero se define el encabezado de la tabla tr><th>Foto</th><th>Descripcion</th><thPrecio</th>).
        category.items.forEach (item =>{
            tableBody +=`1<tr>
               <td><img scr="${item.image} alt="${item.name}
               <td>${item.name} - "${item.description}"</td>
               <td>${item.precio}</td>
            </tr>`;
       })

    });
    
})
