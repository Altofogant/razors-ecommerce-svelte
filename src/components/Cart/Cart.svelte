<script>
    import globalStore from '../../stores/globalStore';
    import { fly, fade } from 'svelte/transition';
    import { link } from 'svelte-routing';
    // itemList
    let user = false;
</script>

<div class="cart-overlay" trnasition:blur>
    <div class="cart-container" transition:fly={{x:100}}>
        <div class="cart" transition:fade={{delay:400}}>
            <div class="cart-header">
                <button class="btn-close" on:click={() => {
                    globalStore.toggleItem('cart', false);
                }}>
                    <i class="fas fa-window-close"></i>
                </button>
                <h2 class="cart-title">your bag</h2>
                <span></span>
            </div>
            <p>cart items</p>
            <div class="cart-footer">
                {#if user}
                    <a href="/checkout" use:link class="btn btn-primary btn-block" on:click={() => {
                        globalStore.toggleItem('cart', false);
                    }}>checkout</a>
                {:else}
                    <p class="cart-login">
                        in order to checkout please
                        <a href="/login" use:link on:click={() => {
                            globalStore.toggleItem('cart', false);
                        }}>login</a>
                    </p>
                {/if}
            </div>
        </div>
    </div>
</div>