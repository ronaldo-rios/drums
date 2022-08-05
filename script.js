document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase())
})
//evento que quando clicado o key realiza a função play_composition
document.querySelector('.composer button').addEventListener('click', ()=> {
    let song = document.querySelector('#input').value

    if(song != ''){
        let songArray = song.split('')
        play_composition(songArray)
        
    }
})
// função para dar som em cada uma das teclas da interface gráfica
function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if (audioElement){
        audioElement.currentTime = 0
        audioElement.play()
    }

    if (keyElement) {
        keyElement.classList.add('active')
    }

    setTimeout(()=> {
        keyElement.classList.remove('active')}, 2000)
}

// Faz um loop com função de programado do temp e pausas  da composição
function play_composition(songArray){
    let wait = 0

    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`)
        }, wait)

        wait += 250
    }

}