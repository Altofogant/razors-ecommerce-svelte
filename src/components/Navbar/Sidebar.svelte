<script>
    import links from '../../constants/links';
    import {link} from 'svelte-routing';
</script>

<div class="sidebar-container">
    <div class="sidebar">
        <div class="sidebar-header">
            <button class="btn-close">
                <i class="fas fa-window-close"></i>
            </button>
        </div>
        <img src="/assets/images/logo.svg" alt="razors logo" class="logo sidebar-logo" />
        <ul class="sidebar-links">
            {#each links as sideLink}
                <li>
                    <a href={sideLink.url} use:link on:click={() => console.log('sidebar closed')}>{sideLink.text}</a>
                </li>
            {/each}
        </ul>
    </div>
</div>