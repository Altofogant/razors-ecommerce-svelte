<script>
    import user from '../stores/user';
    import { link } from 'svelte-routing';
    import {logoutUser} from '../stores/user';
    import globalStore from '../stores/globalStore';
</script>

{#if $user.jwt}
    <a href="/" class="logout-btn" on:click={() => {
        logoutUser();
        globalStore.toggleItem('sidebar', false);
    }}>Logout</a>
{:else}
    <a href="/login" on:click={() => {
        globalStore.toggleItem('sidebar', false);
    }}>Login</a>
{/if}