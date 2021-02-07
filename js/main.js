(function(){
    var btnAgregar = document.getElementById("agregar");
    var title = document.getElementById("title");
    var description = document.getElementById("description");
    var imageURL = document.getElementById("imageURL");
    var bookURL = document.getElementById("bookURL");
    
    var agregarBook = function(){
        var elemento = document.createElement("h2");
        var contenido = document.createTextNode(title.value);
        elemento.appendChild(contenido);

        var img = document.createElement("img");
        img.setAttribute("src", imageURL.value);
    
        var des = document.createElement("p");
        var desContent = document.createTextNode(description.value);
        des.appendChild(desContent);
    
        var link = document.createElement("a");
        var linkContent = document.createTextNode("Link al libro");
        link.appendChild(linkContent);
        link.setAttribute("class","btn");
        link.setAttribute("href", bookURL.value)
    
        var clas = document.createElement("div");
        clas.setAttribute("class","mainBooks");
    
        clas.appendChild(elemento);
        clas.appendChild(img);
        clas.appendChild(des);
        clas.appendChild(link);
    
        document.getElementById("addBook").appendChild(clas);
    }

    btnAgregar.addEventListener("click", agregarBook);
}());
