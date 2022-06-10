import {writable, derived} from 'svelte/store';
import url from '../strapi/URL';
import getProducts from '../strapi/getProducts';

const store = writable([], () => {
    setProducts();
    return ()=>{};
});

async function setProducts() {
    let products = await getProducts();
    if(products.data) {
        products = flattenProducts(products.data);
        console.log(products)
        store.set(products);
    }
}

//subscribe
//set
//update

//flatten products
function flattenProducts(data) {
    return data.map(item => {
        //let image = item.attributes.image.data.attributes.url;
        let image = `${url}${item.attributes.image.data.attributes.url}`;
        item.attributes.image = image;
        return {...item};
    });
}

//featured store
export const featuredStore = derived(store, ($featured) => {
    return $featured.filter(item => item.attributes.featured === true);
});

export default store;