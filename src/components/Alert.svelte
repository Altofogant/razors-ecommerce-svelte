<script>
    import {fly,fade} from 'svelte/transition';
    import globalStore from '../stores/globalStore';
    import {onMount, onDestroy} from 'svelte';

    const handleClose = () => {
        globalStore.toggleItem('alert', false);
    }
</script>

<div class="alert-container" class:alert-danger={$globalStore.alertDanger} in:fly={{y:-200, duration: 1000}} out:fade={{duration:0}}>
    <p>{$globalStore.alertText}</p>
    <button class="alert-close" on:click={handleClose}>
        <i class="fas fa-window-close"></i>
    </button>
</div>