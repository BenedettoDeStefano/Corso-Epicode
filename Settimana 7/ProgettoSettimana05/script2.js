

let timer = document.querySelector(".timer span")
    let tempo = 0
    if(sessionStorage.getItem('timer')) {
        tempo = Number(sessionStorage.getItem('timer'))
    } else {
        tempo = Number (timer.innerHTML)
    }
    timer.innerHTML = tempo

    setInterval(() => {
    tempo++
    sessionStorage.setItem('timer', tempo)
    timer.innerHTML = tempo
}, 1000)