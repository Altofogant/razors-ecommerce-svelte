<script>
    import CartButton from '../Cart/CartButton.svelte';
    import {link} from 'svelte-routing';
    import links from '../../constants/links';
</script>

<nav class="navbar">
    <div class="nav-container">
        <div class="nav-center">
            <ul class="nav-links">
                {#each links as navLink}
                    <li>
                        <a href={navLink.url} use:link>{navLink.text}</a>
                    </li>
                {/each}
            </ul>
            <a href="/" use:link class="nav-logo big-logo">
                <img src="/assets/images/logo.svg" class="logo" alt="razors logo" />
            </a>
            <div class="nav-aside">
                <CartButton />
            </div>
        </div>
    </div>
</nav>