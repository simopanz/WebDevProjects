let grades = []

let numb = document.getElementById("numb")
let calc = document.getElementById("calc")
let res = document.getElementById("res")
let reset = document.getElementById("reset")

numb.addEventListener("keydown", () => {
    let number = Number(numb.value)
    grades.push(number)
    numb.value = ""
})

reset.addEventListener("click", () => {
    grades = []
})

// () => {} --> arrow function / lambda function / funzione anonima
calc.addEventListener("click", () => {
    const numberOfGrades = grades.length
    let gradeSum = 0
    
    for (let i = 0; i < numberOfGrades; i++) {
        gradeSum += grades[i]
    }

    const avarage = gradeSum / numberOfGrades

    // toFixed(n) --> prende n decimali e approssima
    res.textContent = "Media: " + avarage.toFixed(2)
    
    if (avarage >= 6) {
        res.textContent += " Promosso"
    } else {
        res.textContent += " Bocciato"
    }
})