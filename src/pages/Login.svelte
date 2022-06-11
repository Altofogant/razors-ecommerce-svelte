<script>
    let email = '';
    let password = '';
    let username = 'default username';
    let isMember = true;
    $: isEmpty = !email || !password || !username;

    function toggleMember() {
        
    }

    async function handleSubmit() {

    }
</script>

<section class="form">
    <h2 class="section-title">
        {#if isMember}sign in{:else}register{/if}
    </h2>
    <form on:submit|preventDefault={handleSubmit} class="login-form">
        <div class="form-control">
            <label for="email">email</label>
            <input type="email" id="email" bind:value={email}>
        </div>
        <div class="form-control">
            <label for="password">password</label>
            <input type="password" id="password" bind:value={password}>
        </div>
        {#if isMember}
            <div class="form-control">
                <label for="username">username</label>
                <input type="text" id="username" bind:value={username}>
            </div>
        {/if}
        {#if isEmpty}
            <p class="form-empty">please fill out all form fields</p>
        {/if}
        <button class:disabled={isEmpty} class="btn btn-block btn-primary" type="submit" disabled={isEmpty}>submit</button>
        {#if isMember}
            <p class="register-link">need to register?
                <button type="button" on:click={toggleMember}>click here</button>
            </p>
        {:else}
        <p class="register-link">already a member?
            <button type="button" on:click={toggleMember}>click here</button>
        </p>
        {/if}
    </form>
</section>