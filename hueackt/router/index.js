import {init,push} from './router.js'
import RouterLink from "./web-components/routerLink.js";
export default class Router {
    constructor(payload) {

    }
    initRouter (config) {
        customElements.define('router-link', RouterLink )
        const {routes} = config
        init(routes)
    }
    
    useRouter () {

    }
}