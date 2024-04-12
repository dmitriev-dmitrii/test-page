
// console.log(document.title)
// document.title = 'test'
// console.log(document.title)

// export default [
//     {
//         path:'',
//         name:'',
//         title:'',
//         component:''
//     }
// ]


import lorem from "../../pages/lorem.js";

const routes = {
    404: "./pages/error/404.html",
    "/": "./pages/index.html",
    "/about": "./pages/about.html",
    "/lorem": lorem,
};

export default  routes