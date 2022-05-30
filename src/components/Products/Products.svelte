<script>
    export let title = "";
    import { onMount, onDestroy } from 'svelte';
    import products from '../../stores/defaultProducts';
    import Product from './Product.svelte';

    //let localProducts = [];
    // let unsubscribe;

    // onMount(() => {
    //     unsubscribe = products.subscribe(value => {
    //         localProducts = value;
    //     });
    // });

    // onDestroy(() => {
    //     unsubscribe();
    // })
</script>

<h1>Products component</h1>

<section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">
        {#each $products as product (product.id)}
            <Product {product} />
        {/each}
    </div>
</section>