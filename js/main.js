

/*
//AULA 01
var nome = "Adenilton Pedro";
var idade = 40;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
var n1 = 5;
var n2 = 3;
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLocaleLowerCase());
console.log(n1 * n2);
*/

/*
//AULA 02
var lista = ["maça", "pêra", "laranja"];
lista.push("goiaba");
//console.log(lista[1]);
//alert(lista[1]);
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());


var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"verde"} ]
console.log(frutas);
alert(frutas[1].cor);
*/


/*
//AULA 03

var idade = prompt("Qual a sua idade: ")
//var idade = 18;
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}


var count = 0;
while (count <= 5){
    console.log(count)
    alert(count);
    count++;
}


var count;
for(count=0; count <= 5; count++){
    alert(count);
}

var d = new Date();
//alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());

*/

/*
//AULA 04

function soma(n1, n2){
    return n1 + n2;
}


function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}



var idade = prompt("Qual sua idade: ")
console.log(validaIdade(idade));



//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

*/


/*
//AULA 05

function clicou(){
    alert("Obrigado por clicar!!!!")
}

*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("http://globalacademy.com/");
    window.location.href = "http://globalacademy.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

