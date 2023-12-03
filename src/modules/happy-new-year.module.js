import {Module} from '../core/module'
import {getRandomItem, convertMsToDays, getDayTitle} from '../utils'

export class HappyNewYearModule extends Module {
    #audio
    #musics
    #backgrounds
    #nextNewYearDate

    constructor(type, text) {
        super(type, text)
        this.#audio = new Audio()
        this.#musics = ['abba', 'jingleBells', 'mariahCarey']
        this.#backgrounds = ['dom','village', 'new', 'winter', 'night']
        this.#nextNewYearDate = new Date(2024, 0, 1)
    }

    #playAudio () {
        this.#audio.src = `../assets/music/${getRandomItem(this.#musics)}.mp3`
        this.#audio.autoplay = true
    }

    #stopAudio () {
        this.#audio.pause()
    }

    #getDaysLeftNewYear() {
        const currentDate = Date.now()
        const date = convertMsToDays(this.#nextNewYearDate.getTime() - currentDate)
        return date < 0 ? 0 : date
    }

    #renderDate(modalDays) {
        const day = this.#getDaysLeftNewYear()
        modalDays.textContent = `${day} ${getDayTitle(day)}`
    }

    #changeBackground(container) {
        container.style.backgroundImage = `url(../assets/images/happy/${getRandomItem(this.#backgrounds)}.jpeg)`
    }

    trigger() {
        const popup = document.querySelector('.modal')
        const closeButton = popup.querySelector('.modal__close-button')
        popup.classList.remove('modal--hidden')

        const onCloseButtonClick = () => {
            popup.classList.add('modal--hidden')
            closeButton.removeEventListener('click', onCloseButtonClick)
            this.#stopAudio()
        }
        closeButton.addEventListener('click', onCloseButtonClick)

        this.#playAudio()
        this.#changeBackground(popup.querySelector('.modal__container'))
        this.#renderDate(popup.querySelector('.modal__days'))
    }
}    
