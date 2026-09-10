<script>

</script>

<div class="corner">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>

<style>
    .corner{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(6, 1fr);
        gap: var(--spacing-xs);
        row-gap: var(--spacing-xs);
        column-gap: var(--spacing-xs);
        width: 6rem;

        span{
            background-color: var(--color-brand-mid);
            aspect-ratio: 1;
            border-radius: var(--border-radius-2xs);
            width: 1rem;
            height: 1rem;
            filter: blur(0.03rem);
        }

        span:nth-child(1){
            grid-area: 1 / 1 / 2 / 2;
            background-color: color-mix(in srgb, var(--color-brand-mid) 20%, transparent);
        }
        span:nth-child(2){
            grid-area: 2 / 1 / 3 / 2;
            background-color: color-mix(in srgb, var(--color-brand-mid) 20%, transparent);
        }
        span:nth-child(3){
            grid-area: 3 / 1 / 4 / 2;
        }
        span:nth-child(4){
            grid-area: 3 / 2 / 4 / 3;
        }
        span:nth-child(5){
            grid-area: 3 / 3 / 4 / 4;
        }
        span:nth-child(6){
             grid-area: 3 / 4 / 4 / 5;
        }
        span:nth-child(7){
            grid-area: 3 / 5 / 4 / 6;
        }
    }
</style>