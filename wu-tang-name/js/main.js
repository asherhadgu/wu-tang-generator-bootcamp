document.querySelector('#getName').addEventListener('click',genName)

function genName(){


const anOne = Number(document.querySelector('#favSoda').value)
const anTwo = Number(document.querySelector('#favCity').value)
const anThree = Number(document.querySelector('#favColor').value)
const anFour = Number(document.querySelector('#favSnack').value)
const anFive = Number(document.querySelector('#favSoap').value)

let indFirstNameOdj = anOne + anTwo
let indSecondNameObj = anThree + anFour + anFive

let firstNameOdj = ["Lil", "Duby", "Kitty", "Dusty", "Musty", "Gush", "Hut", "Kat"]
let secondNameObj = ["Beez", "Knees", "Money", "Kid", "Dirty", "Man", "Shift", "Week", "Yeet", "Muggs", "God"]

let firstName = firstNameOdj[indFirstNameOdj]
let secondName = secondNameObj[indSecondNameObj]

document.querySelector('#WuTangName').innerText = `${firstName}${secondName}`
}
