// Vai a prendere dal DOM quell'elemento tramite id
let res = document.getElementById("res")
let input = document.getElementById("in")
let inBtn = document.getElementById("inBtn")

inBtn.addEventListener("click", getInputAndAdd)

// Funzioni
function getInputAndAdd() {
    let inVal = Number(input.value)

    // guardia
    if (isNaN(inVal)) {
        res.textContent = "Eh no dai..."
        return
    }

    res.textContent = inVal + " + 5 = " + (inVal + 5)
}

// Array - eterogenei e dinamici
let array = [1, 2, 3, 4, 5, 6, 7]
array.push(123) // aggiunge in coda
array.pop() // restituisce e toglie l'ultimo elemento

//res.textContent = "Ciao" --> aggiunge "Ciao" alla value di res
//res.textContent += " MONDO" --> concatena " MONDO" a res
//res.innerHTML += " <strong>MONDO" --> interpreta tag HTML