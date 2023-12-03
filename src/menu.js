import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
    }

    open(top, left) {
        this.el.classList.add('open')
        this.el.style.top = top + 'px'
        this.el.style.left = left + 'px'
    }

    add(moduleHtml) {
        this.el.innerHTML += moduleHtml
    }

    close() {
        this.el.classList.remove('open')
    }
}