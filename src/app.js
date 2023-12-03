import './styles.css'
import { ContextMenu } from './menu.js'
import { DOC } from './core/constants.js'
import { ShapeModule } from './modules/shape.module.js'
import { CounterModule } from './modules/counter.module.js'
import { TimerModule } from './modules/timer.module.js'

// сюда будем закидывать модули
const modulesArray = []

const shapeModule = new ShapeModule('ShapeModule', 'Случайная фигура')
const counterModule = new CounterModule('CounterModule', 'Аналитика кликов')
const timerModule = new TimerModule('TimerModule', 'Таймер отсчета')

modulesArray.push(shapeModule, counterModule, timerModule)

const menu = new ContextMenu('#menu')
menu.add(shapeModule.toHTML())
menu.add(counterModule.toHTML())
menu.add(timerModule.toHTML())

//снимаем действие по умолчанию и вызываем наше меню
DOC.addEventListener('contextmenu', (event) => {
    event.preventDefault() 

    menu.open(event.y, event.x)
})

//обрабатываем клик по меню, ищем интересующий нас модуль и запускаем его
const handlerCurrentModule = (event) => {    
    const { target } = event
    const currentModuleName = target.dataset.type
    const currentModule = modulesArray.find((item) => {
        return item.type === currentModuleName
    })
    currentModule.trigger()    
    menu.close()
    event.stopPropagation()
}

menu.el.addEventListener('click', handlerCurrentModule)