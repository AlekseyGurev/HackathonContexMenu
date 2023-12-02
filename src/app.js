import './styles.css'
import { HappyNewYearModule } from './modules/happyNewYear.module'

const happyNewYearModule = new HappyNewYearModule("HappyNewYearModule", "Новый год")

document.addEventListener('keydown', (event) => {
    console.log(event.key === 'Escape')

    if(event.key === 'Escape'){
        happyNewYearModule.trigger()
    }
})
