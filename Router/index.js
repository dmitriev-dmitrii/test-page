import {init,push} from './router.js'
import RouterLink from "./web-components/RouterLink.js";
import RouterView from "./web-components/RouterView.js";
export default class Router {
    constructor  (config) {
        customElements.define('router-view', RouterView )
        customElements.define('router-link', RouterLink )
        const {routes} = config
        init(routes)
    }

    useRouter () {

        return {
            push
        }
    }
}