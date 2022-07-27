let Inicio = document.querySelector(".logo")
let BtnLogin = document.querySelector(".btnlogin")
let BtnConsola = document.querySelector(".btnconsola")
const ListaProductos = ["consola","nintendo","play","xbox","control","laptop","celular","start","funko"]

function Openpage(url){
    window.location = url
}

Inicio.addEventListener("click",function(){
    Openpage("./index.html")
});

BtnLogin.addEventListener("click",function(){
    Openpage("./login.html")
});

BtnConsola.addEventListener("click",function(){
    Openpage("./productos.html")
})


let div = document.createElement("div");
div.className="div_lista";
let ul = document.createElement("ul");
ul.className= "lista";
div.appendChild(ul);

let li = document.createElement("li");
li.className= "lista-item";
ul.appendChild(li);
li.textContent= ""

let cajadeldom= document.querySelector(".box_search");
cajadeldom.appendChild(div);


function searchbar(array){
    let liElemet = "" ;
    for (let i= 0; i < array.length; i++) {
    liElemet += `<li>${array[i]}</li>`
    }
    document.querySelector(".lista").innerHTML= liElemet;
 }
 
 function filtrar(event) {
    var searchvalue = event.target.value;
    var filterNames = ListaProductos.filter((v)=>{ return(v.includes(searchvalue));
    })
    searchbar(filterNames);
 }

function ocultar(ocu){
    ocu.style.display= "none"
}
 
function mostrar(show){
    show.style.display = "block"
}

let vistalista = document.querySelector(".div_lista")
let inputsearch = document.querySelector(".searchbar")
let vistaform = document.querySelector(".formu")

inputsearch.addEventListener('click',function(){
mostrar(vistalista)
})

vistaform.addEventListener('mousemove',function(){
    ocultar(vistalista)
})
