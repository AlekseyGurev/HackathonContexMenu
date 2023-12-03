import { Module } from '../core/module'
import { BODY } from '../core/constants'
import { random } from '../utils/'

export class backgroundColor extends Module {
  #hexArray = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ]

  #outputHEXcode(hexCode) {
    const hexTextHTML = document.createElement('p')
    hexTextHTML.className = 'hex-code-text'
    hexTextHTML.textContent = `Цвет фона ${hexCode}`

    const hexBlock = document.createElement('div')
    hexBlock.className = 'hex-block'
    hexBlock.append(hexTextHTML)
    document.body.append(hexBlock)
  }

  #hasOutPutHexCode = false

  trigger(hexArray) {
    const result = []
    for (let i = 0; i < 6; i++) {
      const randomIndex = random(0, hexArray.length - 1)
      const hexElement = hexArray[randomIndex]
      result.push(hexElement)
    }

    const hexResult = `#${result.join('')}`

    BODY.style.backgroundColor = hexResult

    if (!hasOutPutHexCode) {
      outputHEXcode(hexResult)
      hasOutPutHexCode = true
    } else {
      const hexTextHTML = document.querySelector('.hex-code-text')
      hexTextHTML.textContent = `Цвет фона ${hexResult}`
    }
  }
}
