// import Router from './src/js/Router.js'
// import {useCityStore} from './src/js/Store.js'
//
// import routes from './src/routes'
//
// Router(routes)
//
// console.log(document.title)
// document.title = 'test'
// console.log(document.title)

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
