import { Module } from '../core/module'
import { BODY } from '../core/constants'

export class MessageModule extends Module {

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
            messageContainer.style.display = "none";
        }, 5000);
        messageContainer.addEventListener('click', () => {
            messageContainer.style.display = "none"
        })
    }

    trigger() {
        const messageContainer = document.createElement("div")
        messageContainer.className = "message-container"

        const messageText = document.createElement("p")
        messageText.className = "message-text"
        messageText.textContent = this.#randomText()
        messageContainer.append(messageText)

        BODY.append(messageContainer)

        this.#hideMessage()
    }
}
