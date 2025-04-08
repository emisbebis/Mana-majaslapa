
const AnniņaInput = document.querySelector('#1')
const dzirdējaInput = document.querySelector('#2')
const saņēmaInput = document.querySelector('#3')
const šizofrēnijaInput = document.querySelector('#4')
const poga = document.querySelector('#poga')
const vietaTekstam = document.querySelector('p')

poga.addEventListener("click", () => {
    vietaTekstam.textContent = `Reiz kādu dienu Anniņa gāja uz darbu.
    ${AnniņaInput.value } Anniņa
    ${dzirdējaInput.value}  Gar koku gājusi un dzirdēja savādu skaņu. Itkā vīrieša balss. skaļi balss sāka teikt. ŠODIEN NEEJ UZ DARBU!
    Vēlāk Anna saņēma ziņu, ka darba vietā esot kāds iebrucis.${saņēmaInput.value}
    Beigu beigās atklājās, ka Annai ir šizofrēnija.${šizofrēnijaInput.value}.
    `
    
})