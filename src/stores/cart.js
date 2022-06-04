import {writable,derived} from 'svelte/store';
import localCart from '../localCart';

const store = writable([...localCart]);

export const cartTotal = derived(store, ($store)=> {
    let total = $store.reduce((prev, next)=>{
        return (prev += (next.amount*next.price))
    }, 0);
    return total;
});

export default store;