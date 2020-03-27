
//pegar o valor do dolar
var httpRequest;
if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 8 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

let resposta
httpRequest.onreadystatechange = function(){
}

httpRequest.open('GET', "https://openexchangerates.org/api/latest.json?app_id=0db9615233e94f7e86bbb96e62b548c0", false);
httpRequest.send(null);
if (httpRequest.readyState === 4) {
        // everything is good, the response is received
        resposta = (httpRequest.responseText);
    // alert(resposta)
}else{
    console.log('deu ruim')
}

const cotacoes = JSON.parse(httpRequest.responseText)

console.log(cotacoes.rates['BRL'])

let dolar = cotacoes.rates['BRL']

let nFilme = Math.floor(dolar*100)

//mudar o numero do filme na tela
document.querySelector("#numeroFilme").innerHTML= "#"+nFilme;

console.log (filmes[nFilme])


let nomeFilme
// myObj.hasOwnProperty(myProp)
if('nomeOriginal' in filmes[nFilme]){
    nomeFilme = filmes[nFilme].nomeOriginal
}else{
    nomeFilme = filmes[nFilme].nomePT
}
console.log(nomeFilme)
// alert(nomeFilme)

httpRequest.open('GET', 'http://omdbapi.com/?apikey=23f9e0a8&t='+nomeFilme, false);
httpRequest.send(null);
if (httpRequest.readyState === 4) {
        // everything is good, the response is received
        resposta = (httpRequest.responseText);
    // alert(resposta)
}else{
    console.log('deu ruim')
}


// alert(resposta)

const filme = JSON.parse(httpRequest.responseText)

console.log(filme)



document.querySelector("#cardTitulo").innerHTML= nomeFilme;
document.querySelector("#ano").innerHTML= filme.Year;
document.querySelector("#genero").innerHTML= filme.Genre;

var imagem = document.getElementById("imagem");
imagem.src = filme.Poster

// document.body.style.backgroundImage = "url(\'"+filme.Poster+ "\')";


// document.body.style.backgroundImage.setAttribute("filter", "blur");

var bg = document.querySelector('#bg')
bg.setAttribute('background-image', "url(\'"+filme.Poster+ "\')")
console.log("url(\'"+filme.Poster+ "\')")
