let routesNamesMap = new Map()

let routerView = undefined
let currentRoute = {}
let routes = []
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

export const push =  (payload) => {
    const {path,name}  =  payload

    if (name) {
        currentRoute =  routesNamesMap.get(name.toLowerCase())
        return
    }

    if (path) {
        history.pushState(null, null, path );
    }

    renderRouterView();
};



const renderRouterView = async () => {

    // // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    console.log(currentRoute)
    routerView.innerHTML = await view.getHtml();


    // console.log(location.pathname)

    // const
    // console.log('currentRoute',currentRoute.view)
    // console.log(currentRoute.view)
    // routerView.innerHTML =  await currentRoute.view.getHtml()
};

export const init = (routesArr) => {

    routesArr.forEach((item)=> {

        const {name} = item
        routes.push(item)
        if (name) {
            routesNamesMap.set( name.toLowerCase() )
        }

    })

    window.onpopstate = renderRouterView;

    document.addEventListener("DOMContentLoaded", () => {
        routerView  = document.querySelector("#router-view")

        renderRouterView();
    });
}




