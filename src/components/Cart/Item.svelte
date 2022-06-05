<script>
    export let id;
    export let image;
    export let price;
    export let title;
    export let amount;
    // import functionality
    import {removeItem, increaseAmount} from '../../stores/cart.js';
</script>

<div class="cart-item">
    <img src={image} alt={title}>
    <div>
        <h4>{title}</h4>
        <h5>{price}</h5>
        <button class="cart-btn remove-btn" on:click={() => {
            removeItem(id);
        }}>remove</button>
    </div>
    <div>
        <button class="cart-btn amount-btn" on:click={() => {
            increaseAmount(id);
        }}>
            <i class="fas fa-chevron-up"></i>
        </button>
        <p class="item-amount">{amount}</p>
        <button class="cart-btn amount-btn" on:click={() => {
            console.log('decrease item');
        }}>
            <i class="fas fa-chevron-down"></i>
        </button>
    </div>
</div>