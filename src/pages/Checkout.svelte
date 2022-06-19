<script>
    import {onMount} from 'svelte';
    import {navigate, link} from 'svelte-routing';
    import user from '../stores/user';
    import {cartTotal} from '../stores/cart';

    let name = '';
    $: isEmpty = !name;

    onMount(() => {
        if (!$user.jwt) {
            navigate('/');
        }
    });

    function handleSubmit() {
        console.log('form submitted');
    }
</script>

{#if $cartTotal > 0}
    <section class="form">
        <h2>checkout</h2>
        <form action="" class="checkout-form" on:submit|preventDefault={handleSubmit}>
            <h3>order total: ${cartTotal}</h3>
            <div class="form-control">
                <label for="name">your name</label>
                <input type="text" id="name" bind:value={name}>
            </div>
            {#if isEmpty}
            <p class="form-empty">please fill out name field</p>
            {/if}
            <button type="submit" class="btn.btn-block.btn-primary" class:disabled={isEmpty} disabled={isEmpty}>submit</button>
        </form>
    </section>
{:else}
    <div class="checkout-empty">
        <h2>your cart is empty</h2>
        <a href="/products" class="btn btn-primary">fill it</a>
    </div>
{/if}