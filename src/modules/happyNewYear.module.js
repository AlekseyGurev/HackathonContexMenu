import {Module} from '../core/module'
import {getRandomItem} from '../utils'

export class HappyNewYearModule extends Module {
    #audio
    constructor(type, text) {
        super(type, text)
        this.#audio = new Audio()
    }

    #playAudio () {
        const musics = ['abba', 'jingleBells', 'mariahCarey']
        this.#audio.src = `../src/music/${getRandomItem(musics)}.mp3`
        this.#audio.autoplay = true
    }

    #stopAudio () {
        this.#audio.pause()
    }

    trigger() {
        const popup = document.querySelector('.modal')
        const container = popup.querySelector('.modal__container')
        const backgrounds = ['dom','village', 'new', 'winter', 'night']
        const closeButton = popup.querySelector('.modal__close-button')

        popup.classList.remove('modal--hidden')
        container.style.backgroundImage = `url(../src/images/happy/${getRandomItem(backgrounds )}.jpeg)`


        const onCloseButtonClick = () => {
            popup.classList.add('modal--hidden')
            closeButton.removeEventListener('click', onCloseButtonClick)
            this.#stopAudio()
        }


        this.#playAudio()

        closeButton.addEventListener('click', onCloseButtonClick)
    }
}    
