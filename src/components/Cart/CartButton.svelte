<script>
    import globalStore from '../../stores/globalStore';
    import cartStore from '../../stores/cart.js';
    
    $: total = $cartStore.reduce((prev, next)=>{
        return (prev += next.amount)
    }, 0)
</script>

<div class="btn-cart-container">
    <button class="btn-cart-toggle" on:click={() => {
        globalStore.toggleItem('cart', true);
    }}>
        <i class="fas fa-cart-plus"></i>
    </button>
    <span class="btn-cart-items">{total}</span>
</div>