let state = {
    user : {
        name :'misha',
        age:7
    },
    items : [{
        name :'misha',
        age:7
    },
        {
            name :'dima',
            age:7
        }]
}

const handler = {

    set(target, prop, newVal) {

        console.log('SET target, prop, val' , target, prop, newVal)

        // target[prop] = newVal;
        return true;
    },
    get(target , prop, receiver) {
        if (prop in target) {
            return target[prop];
        }
        return undefined
    },

}
const proxyArr = new Proxy([],{
    get(target , key) {
        return target[key]
    },
    set(target , key,value) {
        console.log('val',value)
        target[key] = value
        return true;
    }
})
state = new Proxy( state , handler )
export const useCityStore = ()=> {
   return {state,proxyArr}
}

