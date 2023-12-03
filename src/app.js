import './styles.css'
import { ContextMenu } from './menu.js'
import { DOC } from './core/constants.js'
import { ShapeModule } from './modules/shape.module.js'
import { CounterModule } from './modules/counter.module.js'
import { TimerModule } from './modules/timer.module.js'
import { BackgroundColor } from './modules/background.module.js'
import { MessageModule } from './modules/message.module.js'
import { HappyNewYearModule } from './modules/happy-new-year.module.js'

// сюда будем закидывать модули
const modulesArray = []

const shapeModule = new ShapeModule('ShapeModule', 'Случайная фигура')
const counterModule = new CounterModule('CounterModule', 'Аналитика кликов')
const timerModule = new TimerModule('TimerModule', 'Таймер отсчета')
const backgroundColor = new BackgroundColor('BackgroundColor', 'Случайный фон')
const messageModule = new MessageModule('messageModule', 'Кастомное сообщение')
const happyNewYearModule = new HappyNewYearModule('happyNewYearModule', 'Новогоднее настроение')

modulesArray.push(shapeModule, counterModule, timerModule, backgroundColor, messageModule, happyNewYearModule)

const menu = new ContextMenu('#menu')
menu.add(shapeModule.toHTML())
menu.add(counterModule.toHTML())
menu.add(timerModule.toHTML())
menu.add(backgroundColor.toHTML())
menu.add(messageModule.toHTML())
menu.add(happyNewYearModule.toHTML())

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