var container = document.getElementById("container");
console.log(container.innerHTML);
container.className = "green";
console.log(container.className);

var paragraphes = document.getElementsByTagName("p");
for(let paragraphe of paragraphes){
    console.log(paragraphe.innerHTML);
}

var bleus = container.getElementsByClassName("blue");
for(let bleu of bleus){
    console.log(bleu.innerHTML);
}

var parConteneurs = document.getElementsByName("parConteneur");
for(let parConteneur of parConteneurs){
    console.log(parConteneur.innerHTML);
}

var pbleus = document.querySelectorAll("p.blue");
for(let pbleu of pbleus){
    console.log(pbleu.innerHTML);
}

var prouge = document.querySelector("p.red");
console.log(prouge.innerHTML);

var lien = document.querySelector("a");
var href = lien.getAttribute('href');
console.log(href);

lien.setAttribute("href", "https://github.com/Jendoki");
console.log(lien.href);