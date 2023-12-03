import { Module } from '../core/module'
import { BODY, DOC } from '../core/constants'
import { random } from '../utils'

export class BackgroundColor extends Module {
  #hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

  #hasOutPutHexCode = false
  #hexTextHTML = DOC.createElement('p')
  #hexBlock = DOC.createElement('div')

  #outputHEXcode(hexCode) {
    this.#hexTextHTML.className = 'hex-code-text'
    this.#hexTextHTML.textContent = `Цвет фона ${hexCode}`

    this.#hexBlock.className = 'hex-block'
    this.#hexBlock.append(this.#hexTextHTML)
    BODY.append(this.#hexBlock)
  }

  #generateHexCode() {
    const result = []

    for (let i = 0; i < 6; i++) {
      const randomIndex = random(0, this.#hexArray.length - 1)
      const hexElement = this.#hexArray[randomIndex]
      result.push(hexElement)
    }
    
    return result
  }

  trigger() {    
    const hexCode = this.#generateHexCode()
    const hexResult = `#${hexCode.join('')}`

    if (!this.#hasOutPutHexCode) {
      this.#outputHEXcode(hexResult)
      this.#hasOutPutHexCode = true
    } else {
      this.#hexTextHTML.textContent = `Цвет фона ${hexResult}`
    }

    setTimeout(() => {
      BODY.style.backgroundColor = '#fff'
    }, 4000)

    setTimeout(() => {
      this.#hexBlock.remove()
      this.#hasOutPutHexCode = false
    }, 4000)

    return BODY.style.backgroundColor = hexResult
  }
}
