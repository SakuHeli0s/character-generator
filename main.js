//CARGAR ELEMENTOS HTML

const input = document.getElementById("input-name")
const charaOption = document.getElementById("chara-option")
const btnChara = document.getElementById("btn-chara")
const errorMsg = document.getElementById("error-msg")

const charaContainer = document.getElementById("chara-container")
const charaImg = document.getElementById("chara-img")
const charaName = document.getElementById("chara-name")
const statClass = document.getElementById("stat-class")
const statHp = document.getElementById("stat-hp")
const statMp = document.getElementById("stat-mp")
const statStr = document.getElementById("stat-str")
const statDef = document.getElementById("stat-def")

const imagenes = {
    bruja: "./img/bruja.jpg",
    arquero: "./img/arquero.jpg",
    maga: "./img/maga.jpeg",
    caballero: "./img/caballero.jpeg",
}


//CODIGO FORMULARIO

btnChara.addEventListener("click", () => {
    //Si el input esta vacío + mensaje error
    if(input.value === ""){
        errorMsg.style.display = "block"
        return
    }
    errorMsg.style.display = "none"

    let name = input.value 
    let clase = charaOption.value
    let vida = Math.floor(Math.random() * 90) + 10
    let magia = Math.floor(Math.random() * 90) + 10
    let fuerza = Math.floor(Math.random() * 90) + 10
    let defensa = Math.floor(Math.random() * 90) + 10

    charaName.textContent = `Nombre: ${name}`
    statClass.textContent = `Clase: ${clase}`
    charaImg.src = imagenes[clase]
    console.log(imagenes[clase])
    console.log(charaImg)
    statHp.textContent = `Vida: ${vida}`
    statMp.textContent = `Magia: ${magia}`
    statStr.textContent = `Fuerza: ${fuerza}`
    statDef.textContent = `Defensa: ${defensa}`

    charaContainer.style.display = "block"

    console.log(clase)
})