var cantRequest = document.querySelector("#requestCount");
var cantConnections = document.querySelector("#connectionsCount");
var nameProfile = document.querySelector("#userName");
var todo = document.querySelector("#all");

function accept(id){
    var element = document.querySelector(id);
    element.remove();
    cantRequest.innerText--;
    cantConnections.innerText++;
}

function ignore(id){
    var element = document.querySelector(id);
    element.remove();
    cantRequest.innerText--;
}

function edit(){
    nameProfile.innerText = "Jisel M";
}
function salir(){
    todo.remove();
    alert('Has cerrado sesión');
}
