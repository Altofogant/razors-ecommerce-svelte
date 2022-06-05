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
        return toggleAmount(id,storeValue, "inc" );
    })
};
// local storage

export default store;