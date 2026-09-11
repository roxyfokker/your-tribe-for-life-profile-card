<!--https://www.youtube.com/watch?v=RA-_Gpvm8yA-->
<!--
Kleur moet variabel zijn 
Hover optioneel
@render
-->

<script>

</script>
<!--https://svelte.dev/docs/svelte/@render-->


<p></p>

<style>
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
</style>