let resElem = document.getElementById("res")
let btnContainerElem = document.getElementById("btnContainer")
let startElem = document.getElementById("start")
let resetElem = document.getElementById("reset")

const MAX_ELEM = 30;
let totalSum = 0;
let generator = null;
let elemCounter = 1;


function genBtn(counter) {
    let newBtn = document.createElement("button")
    newBtn.textContent = counter
    newBtn.value = counter

    newBtn.addEventListener("click", () => {
        totalSum += Number(newBtn.value)
        resElem.textContent = totalSum
        newBtn.remove()
    })

    btnContainerElem.append(newBtn)

}

startElem.addEventListener("click", () => {
    if (generator !== null) return

    btnContainerElem.textContent = "";
    totalSum = 0
    resElem.textContent = ""
    elemCounter = 1
    generator = setInterval(() => {
        genBtn(elemCounter)
        elemCounter++;

        if (elemCounter > MAX_ELEM) {
            clearInterval(generator)
            generator = null
        }
    }, 1000)

})


resetElem.addEventListener("click", () => {
    btnContainerElem.textContent = "";
    totalSum = 0;
    resElem.textContent = ""
    elemCounter = 1;
    clearInterval(generator);
    generator = null;
})