let routesNamesMap = new Map()

let routerViewDom = undefined
let currentRoute = {}
const routes = [{
    path: "/404",
    name:'Not-Found',
    component: '<h1> 404 Not Found </h1>'
}]

// const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

// const getParams = match => {
//     const values = match.result.slice(1);
//     const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
//
//     return Object.fromEntries(keys.map((key, i) => {
//         return [key, values[i]];
//     }));
// };


const findRoute =  ( {path = '', name = '' } )=> {

    if (name) {
        return  routesNamesMap.get(name.trim().toLowerCase())
    }

    //search by path
    const route   =  routes.find((item)=> {
        // TODO dynamic route , params? :id
        return item.path === path
    })

    if (route) {
        return route
    }

        // TODO переделать на страницу ошибки c props кодом ошибки
       return    routes.find((item)=> {
        return item.path === '/404'
    })
}


const renderRouterView = async () => {

    const {component} = currentRoute

    // if (typeof component === 'string' && component.endsWith('html')) {
    //
    //     const data =       await fetch(component).then((res) => res.text())
    //
    //
    //     // const scriptEl = document.createRange().createContextualFragment(html);
    //     // document.getElementById('1').append(scriptEl)
    //     return
    // }

    if (typeof component  === "function") {

        const html = await component()
        // routerViewDom.innerHTML = html
        const documentFragment = document.createRange().createContextualFragment(html);
        routerViewDom.innerHTML = ''

        // console.log(documentFragment.children)
        routerViewDom.append(documentFragment)
        // routerViewDom.innerHTML = scriptEl
        return
    }

    routerViewDom.innerHTML =  component || ''

    // TODO router children
    // // Test each route for potential match
    // const potentialMatches = routes.map(route => {
    //     return {
    //         route: route,
    //         result: location.pathname.match(pathToRegex(route.path))
    //     };
    // });
    //
    // let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
    //
    // if (!match) {
    //     match = {
    //         route: routes[0],
    //         result: [location.pathname]
    //     };
    // }
    //
    // const view = new match.route.view(getParams(match));
    //
    // console.log(currentRoute)
    // routerView.innerHTML = await view.getHtml();


    // console.log(location.pathname)

    // const
    // console.log('currentRoute',currentRoute.view)
    // console.log(currentRoute.view)
    // routerView.innerHTML =  await currentRoute.view.getHtml()
};

export const push = async  (payload) => {

    const {params} = payload

    currentRoute = findRoute(payload)

    window.history.pushState(null, null, currentRoute.path );

    await  renderRouterView();
};


const onWindowPopState = async ( e ) => {
    currentRoute = findRoute({ path : window.location.pathname })
    await  renderRouterView();
}

export const init = (routesArr) => {

    routesArr.forEach((item)=> {

        item.name = item.name.toLowerCase().trim()

        const { name } = item
        routes.push(item)

        if (name) {
            routesNamesMap.set( name , item )
        }

    })

    currentRoute = findRoute({ path : window.location.pathname })

    window.onpopstate = onWindowPopState;

    document.addEventListener("DOMContentLoaded", () => {
        routerViewDom  = document.querySelector("#router-view")

        renderRouterView();
    });
}




