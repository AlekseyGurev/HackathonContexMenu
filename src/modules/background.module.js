import { Module } from '../core/module'
import { BODY } from '../core/constants'
import { random } from '../utils'

export class BackgroundColor extends Module {
  #hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

  #hasOutPutHexCode = false

  #outputHEXcode(hexCode) {
    const hexTextHTML = document.createElement('p')
    hexTextHTML.className = 'hex-code-text'
    hexTextHTML.textContent = `Цвет фона ${hexCode}`

    const hexBlock = document.createElement('div')
    hexBlock.className = 'hex-block'
    hexBlock.append(hexTextHTML)
    document.body.append(hexBlock)

    setTimeout(() => {
      hexBlock.remove()
    }, 4000)
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
      const hexTextHTML = document.querySelector('.hex-code-text')
      hexTextHTML.textContent = `Цвет фона ${hexResult}`
    }

    setTimeout(() => {
      BODY.style.backgroundColor = '#fff'
    }, 4000)

    return BODY.style.backgroundColor = hexResult
  }
}
