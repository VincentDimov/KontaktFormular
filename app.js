//VARIABLER FÖR INPUT AV OLIKA ELEMENT
const form = document.getElementById('form')
const namnInput = document.getElementById('namn')
const epostInput = document.getElementById('e-post')
const telInput = document.getElementById('tel')
const meddelandeInput = document.getElementById('meddelande')

//VARIABLER FÖR FELMEDDELANDE
const namnFel = document.getElementById('namnFel')
const epostFel = document.getElementById('epostFel')
const telFel = document.getElementById('telFel')
const meddelandeFel = document.getElementById('meddelandeFel')
//LYCKAD IFYLLNING SAMT SKICKAD
const formSkickad = document.getElementById('formSkickad')

//VALIDERINGSFUNKTIONER
function valideraNamn(){
    const namnInput = namnInput.value.trim()
} 