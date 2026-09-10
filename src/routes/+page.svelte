<script>
    let { data } = $props();
    const person = data.person;

    let roleName = $derived(data.person.role[0]?.role_id?.name);

    import Corner from "$lib/components/CornerPattern.svelte"
    import Crosses from "$lib/components/CrossPattern.svelte";
</script>

<Crosses />

<Corner class="top-right" />
<Corner class="bottom-right" />
<Corner class="bottom-left" />

<section class="system-info">
    <p>USER ID: #{person.id}</p>
    <p>NAME: {person.name}</p>
    <p>ROLE: {roleName}</p>
</section>


<style>
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

    :global(.top-right){
        position: absolute;
        top: var(--spacing-lg);
        right: var(--spacing-lg);
        transform: rotate(-180deg);
    }
    :global(.bottom-right){
        position: absolute;
        bottom: var(--spacing-lg);
        right: var(--spacing-lg);
        transform: scaleX(-1);

    }
    :global(.bottom-left){
        position: absolute;
        bottom: var(--spacing-lg);
        left: var(--spacing-lg);
    }
</style>