<script>
    let { data } = $props();
    const person = data.person;

    let roleName = $derived(data.person.role[0]?.role_id?.name);

    import Corner from "$lib/components/CornerPattern.svelte"
    import Crosses from "$lib/components/CrossPattern.svelte";

    // https://svelte.dev/docs/svelte/svelte-window
    // hier nog een animatie op de p toevoegen
    function handleKeydown(event) {
        if (event.key === "Enter") {
            window.location.href = "/profile";
        }
    }
</script>

<svelte:window onkeydown={handleKeydown} />

<Crosses />

<Corner class="corner-top-right" />
<Corner class="corner-bottom-right" />
<Corner class="corner-bottom-left" />

<section class="system-info container">
    <p class="text">USER ID: #{person.id}</p>
    <p>NAME: {person.name}</p>
    <p>ROLE: {roleName}</p>
</section>

<h1>Roxy Fokker</h1>
<h2 class="neon">
    <span>Enter </span>
    <span>The</span> 
    <span>Profile</span>
</h2>
<p class="loading-text">LOADING PERSONAL DATA...</p>

<p class="continue-text">PRESS ENTER TO CONTINUE_</p>


<style>
/*https://svelte.dev/docs/svelte/global-styles*/
    :global(body){
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
    }
    .system-info{ 
        position: absolute;
        top: var(--spacing-lg);
        left: var(--spacing-lg);
        p{
           
            font-family: var(--font-primary);
            color: var(--color-brand-mid);
            line-height: -1rem;
            text-transform: uppercase;
            letter-spacing: 15%;
            filter: blur(0.06rem);
            font-size: var(--font-size-body-sm);
            background: transparent;
        }
    }
    :global(.corner-top-right){
        position: absolute;
        top: var(--spacing-lg);
        right: var(--spacing-lg);
        transform: rotate(-180deg);
    }
    :global(.corner-bottom-right){
        position: absolute;
        bottom: var(--spacing-lg);
        right: var(--spacing-lg);
        transform: scaleX(-1);

    }
    :global(.corner-bottom-left){
        position: absolute;
        bottom: var(--spacing-lg);
        left: var(--spacing-lg);
    }

    h1{
        font-family: var(--font-secondary);
        font-size: 16vw;
        white-space: nowrap;
        text-align: center;
        color: color-mix(in srgb, var(--color-brand-mid) 10%, transparent);
        z-index: 1;
        background: transparent;
    }

    h2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: transparent;
        z-index: 2;
        span{
            background: transparent;
            font-family: var(--font-primary);
            font-weight: bold;
            font-size: 6vw;
            text-transform: uppercase;
            line-height: 1;
        }
    }

    .loading-text{
        letter-spacing: 0.4rem;
        position: absolute;
        font-weight: normal;
        font-size: 1vw;
        top: 71%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: transparent;
    }
    .continue-text{
        position: absolute;
        top: 85%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .neon{
        transition: filter 0.5s ease;
        color: var(--color-brand-mid);
        filter: drop-shadow(0 0 1px var(--color-brand-mid))
            drop-shadow(0 0 10px var(--color-brand-mid));
        &:hover{
            filter: drop-shadow(0 0 2px var(--color-brand-mid))
                
                drop-shadow(0 0 16px var(--color-brand-mid));
            cursor: pointer;
        }
    }

    .container{
        display: inline-block;
        .text{
            border-right: solid 0.1rem;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            animation: typing 2s steps(18),
            cursor .4s step-end infinite alternate;
        }
    }
    @keyframes cursor{
        50% {border-color: transparent;}
    }
    @keyframes hide-cursor {
        to { border-right-color: transparent; }
    }
    @keyframes typing{
        from {width: 0}
    }
</style>