import { Module } from '../core/module'
import { BODY } from '../core/constants'
import { random } from '../utils'

export class MessageModule extends Module {

    #messageContainer = document.createElement("div")
    #messageText = document.createElement("p")

    #randomText() {
        const array = [
            "JavaScript любезно предоставил Вам возможность прочесть данное сообщение",
            "Вы видите это сообщение благодаря труду талантливых разработчиков",
            "Загрузка остроумной мысли...",
            "Только посвящённому откроется данное сообщение...",
            "Проснитесь, мистер Андерсон!"
        ]
        const random = array[Math.floor(Math.random() * array.length)]
        return random
    }

    #hideMessage() {
        setTimeout(() => {
            this.#messageContainer.style.display = "none"
            this.#messageText.textContent = ''
        }, 5000);
        this.#messageContainer.addEventListener('click', () => {
            this.#messageContainer.style.display = "none"
            this.#messageText.textContent = ''
        })
    }

    trigger() {   
        this.#messageContainer.className = "message-container"        
        this.#messageText.className = "message-text"
        this.#messageText.textContent = ''
        this.#messageText.textContent = this.#randomText()
        this.#messageContainer.style.top = `${random(100, 1000)}px`
        this.#messageContainer.style.left = `${random(100, 1000)}px`
        this.#messageContainer.append(this.#messageText)
        this.#messageContainer.style.display = "block"

        BODY.append(this.#messageContainer)

        this.#hideMessage()
    }
}
