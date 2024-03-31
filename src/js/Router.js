//
// function route  (event) {
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
//     handleLocation();
// }
//
//
// const routes = {
//
// };
//
//
// async  function handleLocation () {
//     const path = window.location.pathname;
//     // const route = routes[path] || routes[404];
//
//     if  (path === '/lorem') {
//
//         document.getElementById("router-view").innerHTML = routes[path] || routes[404];
//
//         return
//     }
//
//     // const html = await fetch(route).then((data) => data.text());
//
//     // document.getElementById("main-page").innerHTML = html;
// }
//
//
// window.onpopstate = (e)=>{
//     e.preventDefault()
//     // console.log(e)
// };
//
//
// window.onpopstate = handleLocation;
// window.route = route;
//
// const init = ( routesArr ) => {
//
//     handleLocation()
// }
//
// class Router {
//     routes = {}
//     constructor(payload) {
//         this.routes = payload.routes
//     }
//     push (route) {
//         console.log(route)
//     }
//     replace (route) {
//         console.log(route)
//     }
// }
//
// export  default  Router