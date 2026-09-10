<script>
    let { data } = $props();
    const person = data.person;

    let roleName = $derived(data.person.role[0]?.role_id?.name);
</script>

<section class="system-info">
    <p>USER ID: #{person.id}</p>
    <p>NAME: {person.name}</p>
    <p>ROLE: {roleName}</p>
</section>

<style>
    .system-info{
        p{
            font-family: var(--font-primary);
            color: var(--color-brand-mid);
            line-height: -1rem;
            text-transform: uppercase;
            letter-spacing: 15%;
            filter: blur(0.06rem);
            font-size: var(--font-size-body-xs);
        }
    }
</style>