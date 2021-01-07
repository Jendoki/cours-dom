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
