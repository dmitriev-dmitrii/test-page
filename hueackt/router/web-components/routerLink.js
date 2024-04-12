import {push} from '../router.js'

const template = document.createElement('template')
template.innerHTML = `<a href=""><slot></slot></a>`


export default class RouterLink extends HTMLElement {
    path = ''
    name = ''
    isDisabled = false
    constructor() {
        super();

        this.path = this.getAttribute('path');
        this.name = this.getAttribute('name');
        this.isDisabled = this.getAttribute('disabled');

        const [hrefTag] =  template.content.children

        hrefTag.setAttribute('href',this.path)


        hrefTag.onclick = this.onHrefClickHandle


        const shadow  = this.attachShadow({mode:'open'})
        shadow.append(template.content.cloneNode(true))
    }
    connectedCallback() {
        // console.log(this)
    }

    disconnectedCallback() {
        // "Unmount"
        // console.log('disconnectedCallback')
    }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        // called when attributes are added, removed, or changed
        // console.log('disconnectedCallback')
    }

    onHrefClickHandle (e){
        e.preventDefault()

        const {path,name} = this

        push({  path, name } )
    }
}

