import Router from './hueackt/router'


class RouterPage {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }
}
class Home extends RouterPage {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Home</h1>
        `;
    }
}

class Posts extends RouterPage {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Posts</h1>
            <p>You are viewing the posts!</p>
            <router-link path="/posts/1"> to post 1 </router-link>
        `;
    }
}

class Post extends RouterPage {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Viewing Post");
    }

    async getHtml() {
        return `
            <h1>Post</h1>
            <p>You are viewing post #${this.postId}.</p>
        `;
    }
}



const routes = [
    { path: "/", view: Home  },
    { path: "/posts", view: Posts },
    { path: "/posts/:id", view: Post },
];

const {initRouter} = new Router()

initRouter({routes} )

//
// const {state,proxyArr} = useCityStore()
//
// // proxyArr = []
// // console.log(state.items)
// // console.log(state.items.push({gg:2}))
//
//
// let handlers = Symbol('handlers');
//
// function makeObservable(target) {
//     // 1. Создадим хранилище обработчиков
//     target[handlers] = [];
//
//     // положим туда функции-обработчики для вызовов в будущем
//     target.observe = function(handler) {
//         this[handlers].push(handler);
//     };
//
//     const handler = {
//         set(target, property, value, receiver) {
//             let success = Reflect.set(...arguments); // перенаправим операцию к оригинальному объекту
//             if (success) { // если не произошло ошибки при записи свойства
//                 // вызовем обработчики
//                 target[handlers].forEach(handler => handler(property, value));
//             }
//             return success;
//         }
//     }
//
//     // 2. Создадим прокси для реакции на изменения
//     return new Proxy(target, handler);
// }
//
// let user = {
//     items:[1]
// };
//
// user = makeObservable(user);
//
// user.observe((key, value) => {
//    console.log(`SET ${key}=${value}`);
// });
//
// user.items.push(2);
//
// user.name = 'ss'
//
// user.items = []
