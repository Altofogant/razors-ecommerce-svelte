import {writable,derived} from 'svelte/store';
import localCart from '../localCart';
// cart
const store = writable([...localCart]);
// cart total
export const cartTotal = derived(store, ($store)=> {
    let total = $store.reduce((prev, next)=>{
        return (prev += (next.amount*next.price))
    }, 0);
    return total;
});
// local functions
const remove = (id, items) => {
    return items.filter(item => item.id !== id);
};

const toggleAmount = (id, items, action) => {
    return items.map(item => {
        let newAmount;
        if (action === 'inc') {
            newAmount = item.amount + 1;
        } else if (action === 'dec') {
            newAmount = item.amount - 1;
        } else {
            newAmount = item.amount;
        };
        return item.id === id ? {...item, amount:newAmount} : {...item};
    });
};
// global functions
export const removeItem = id => {
    store.update(storeValue => {
        return remove(id, storeValue);
    });
};

export const increaseAmount = id => {
    store.update(storeValue => {
        return toggleAmount(id,storeValue, "inc");
    })
};

export const decreaseAmount = id => {
    store.update(storeValue => {
        let item = storeValue.find(item => item.id === id);
        let store;
        if (item.amount === 1) {
            store = remove(id, storeValue);
        } else {
            store = toggleAmount(id, storeValue, "dec");
        };
        return [...store];
    });
};

export const addToCart = product => {
    store.update(storeValue => {
        const {id, image, title, price} = product;
        let item = storeValue.find(item => item.id === id);
        let store;
        if (item) {
            store = toggleAmount(id, storeValue, "inc");
        } else {
            let newItem = {id, image, title, price, amount: 1};
            store = [...storeValue, newItem];
        };
        return store;
    });
};
// local storage

export default store;