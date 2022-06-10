import {writable, derived} from 'svelte/store';
import localProducts from '../localProducts';
import getProducts from '../strapi/getProducts';

const store = writable([], () => {
    setProducts();
    return ()=>{};
});

async function setProducts() {
    let products = await getProducts();
    console.log(products.data)
    if(products.data) {
        //products = flattenProducts(products.data);
        store.set(products.data);
    }
}

//subscribe
//set
//update

//flatten products
function flattenProducts(data) {
    return data.map(item => {
        let image = item.image.url;
        return {...item, image};
    });
}

//featured store
export const featuredStore = derived(store, ($featured) => {
    return $featured.filter(item => item.attributes.featured === true);
});

export default store;