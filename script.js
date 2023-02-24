let chave = "67eb35e7f4d2960a9ba1b6ddced8cbe3"

function colocarnatela(dados){
document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp_max) + "°C"
document.querySelector(".prev").innerHTML = dados.weather[0].description
document.querySelector(".umid").innerHTML = "Umidade: " + dados.main.humidity + "%"
document.querySelector(".nuvem").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

console.log(dados)
}

async function buscarCidade(cidade){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric") 
        .then(resposta => resposta.json())

        colocarnatela(dados)

       
}

function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value
 
    buscarCidade(cidade)
 }