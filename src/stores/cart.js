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
}
// global functions
export const removeItem = id => {
    store.update(storeValue => {
        return remove(id, storeValue);
    });
};
// local storage

export default store;