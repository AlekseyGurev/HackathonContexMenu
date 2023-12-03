import {Module} from '../core/module'
import {DOC} from '../core/constants'

export class TimerModule extends Module {

    #renderElement(){
        const container = DOC.createElement('div')
        container.className = 'container-timer'
        document.body.append(container)

        const timeValueBlock = DOC.createElement('div')
        const timeForm = DOC.createElement('form')

        const timeValue = DOC.createElement('input')
        timeValue.id = 'number'
        timeValue.type = 'number'
        timeValue.min = 0
        timeValue.placeholder ='Введите число'
        timeValue.className = 'container-timer__number'

        const timerBtn = DOC.createElement('input')
        timerBtn.type = 'submit'
        timerBtn.value = 'Старт'
        timerBtn.classList = 'container-timer__btn'

        const timerValueBlock = DOC.createElement('div')
        timerValueBlock.className = 'timer-value-block'

        const spanTimerInDiv = DOC.createElement('span')
        spanTimerInDiv.textContent = 'Начинаем отсчет времени'

        timerValueBlock.append(spanTimerInDiv)
        
        timeForm.append(timeValue,timerBtn)
        timeValueBlock.append(timeForm)
        container.append(timeValueBlock)

        return {timeForm, container, timerValueBlock, spanTimerInDiv}
    }

    #timeFormListener(container, timerValueBlock, spanTimerInDiv){
       return (event)=>{
        event.preventDefault()       
            container.append(timerValueBlock)
            let timerValue = Number(event.target.number.value)
            event.target.number.value = '' 
            
            const interval = setInterval(()=>{

                if(timerValue === 0){
                    spanTimerInDiv.textContent = 'Отсчет времени завершен'
                    clearInterval(interval) 
                    setTimeout(()=>{
                        timerValueBlock.remove()
                        spanTimerInDiv.textContent = 'Начинаем отсчет времени'
                    },1000)                  
                } else{                                       
                    spanTimerInDiv.textContent = timerValue
                    timerValue--
                }
            },1000)
        }    
    }
    
    trigger() {        
       const {timeForm, container, timerValueBlock, spanTimerInDiv} = this.#renderElement()
       timeForm.addEventListener('submit',this.#timeFormListener(container, timerValueBlock, spanTimerInDiv))
      }
}