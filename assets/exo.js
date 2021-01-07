//EXO 1 - question 1
// function changer_style(){
//     var x = document.getElementById('parag1');
//     x.style.color="white";
//     x.style.backgroundColor="black";
//     x.style.paddingLeft="5px";
//     x.style.border="1px dotted black";
// }

//EXO 1 - question 2
function changer_style(){
    document.getElementById("parag1").classList.add("active");
}

//EXO 2
function getAttributes(){
    var lien = document.querySelector("a");
    var href = lien.getAttribute('href');
    var hreflang = lien.getAttribute('hreflang');
    var rel = lien.getAttribute('rel');
    var target = lien.getAttribute('target');
    var type = lien.getAttribute('type');

    document.getElementById("href").innerHTML = href;
    document.getElementById("hreflang").innerHTML = hreflang;
    document.getElementById("rel").innerHTML = rel;
    document.getElementById("target").innerHTML = target;
    document.getElementById("type").innerHTML = type;
}

//EXO 3
function getFormvalue() {
    var fname = document.getElementsByName("fname")[0].value;
    console.log(fname);
    document.getElementById("prenom").innerHTML = fname;
    var lname = document.getElementsByName("lname")[0].value;
    console.log(lname);
    document.getElementById("nom").innerHTML = lname;
}

//EXO 4 
function loadAlert(){
    alert("The document is loaded");
}

function imageAlert(){
    alert("Pika pika!");
}

function clickAlert(){
    alert("Hello there!");
}

function changeStuff(){
    var x = document.getElementById('changeMe');
    var y = document.getElementById('coolbutton');
    x.style.backgroundColor="purple";
    y.style.backgroundColor="darkblue";
    y.style.color="white";
    y.style.padding="20px";
    document.getElementById("coolbutton").innerHTML = "Wow, amazing!";
}

function doNotChangeStuff(){
    var x = document.getElementById('changeMe');
    var y = document.getElementById('coolbutton');
    x.style.backgroundColor="";
    y.style.backgroundColor="";
    y.style.color="";
    y.style.padding="";
    document.getElementById("coolbutton").innerHTML = "No fun... Click me again!";
}

function angryPupper(){
    var img = document.getElementById("pupper");
    img.setAttribute("src", "assets/angry.jpg");
}

function goodPupper(){
    var img = document.getElementById("pupper");
    img.setAttribute("src", "assets/pupper.jpg");
}


