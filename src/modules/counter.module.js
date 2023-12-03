import {Module} from '../core/module'
import {DOC, BODY} from '../core/constants'

export class CounterModule extends Module {


    #renderCount(count,time,container){        

        const spanCounter = DOC.createElement('span')
        spanCounter.className = 'counter'
        spanCounter.textContent = `Вы кликнули ${count} раз за ${time/1000} секунды`
        container.append(spanCounter)
        setTimeout(() => { spanCounter.remove() }, 3000)
        
    }

    trigger(time = 3000) {
        let start = time/1000
        let count = 0

        const container = DOC.createElement('div')
        container.classList.add('container-count')
        const spanStart = DOC.createElement('span')
        container.append(spanStart)
        BODY.append(container)

        if(typeof time === 'number'){ 
            spanStart.textContent = start
            const interval = setInterval(()=>{
                if(start !== 0){     
                    start--
                    spanStart.textContent = start
                } else{
                    clearInterval(interval)                                                         
                }               
            },1000)
            
            const counterClick =()=>{
                count++
            }

            BODY.addEventListener('click',counterClick)

            setTimeout(()=>{
                document.removeEventListener('click',counterClick)
                spanStart.textContent = ''  
                this.#renderCount(count,time,container)
            },time) 
            
        } else{
            alert('Задайте время в милисекундах')
        }
        
      }
}